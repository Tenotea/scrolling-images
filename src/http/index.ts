/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";

type HttpServiceConstructorParams = CreateAxiosDefaults<any>;

type HttpServiceParams<DTO, DQO> = {
  path: string;
  method: "post" | "get" | "delete" | "put" | "patch";
  body?: DTO;
  query?: DQO;
  options?: {
    handleError?: boolean;
  };
};
export type HttpServiceResolverError = {
  error: string;
};

type HttpServiceResolverDTO<T> = Promise<{
  data: T | null;
  error: HttpServiceResolverError | null;
}>;

export default class HttpService {
  private axiosInstance: AxiosInstance;
  constructor(private params: HttpServiceConstructorParams) {
    this.axiosInstance = axios.create(this.params);
  }

  private async resolver<T>(
    fn: Promise<AxiosResponse>
  ): HttpServiceResolverDTO<T> {
    let data: T | null = null;
    let error: null | HttpServiceResolverError = null;
    try {
      const { data: apiResponse } = await fn;
      data = apiResponse;
    } catch (_error: any) {
      error = _error.response?.data || {
        message: _error.message,
        statusCode: 400,
      };
    }
    return { data, error };
  }

  async SendRequest<DAO, DTO = Record<any, any>, DQO = Record<any, any>>(
    params: HttpServiceParams<DTO, DQO>
  ) {
    return this.resolver<DAO>(
      this.axiosInstance[params.method](
        params.path,
        params.body ? params.body : ({ params: params.query || {} } as any),
        params.body && params.query ? { params: params.query } : {}
      )
    );
  }
}
