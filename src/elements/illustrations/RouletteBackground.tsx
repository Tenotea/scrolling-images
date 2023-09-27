import React from "react";

export default function RouletteBackground(props: { grandPrize?: boolean }) {
  if (props.grandPrize) {
    return (
      <svg
        width="0"
        height="0"
        viewBox="0 0 472 275"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
      >
        <g clipPath="url(#clip0_38_15833)">
          <rect width="472" height="275" fill="#F2D052" />
          <rect width="472" height="275" fill="url(#paint0_linear_38_15833)" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H470V7.02944C469.53 7.01145 469.044 7.00129 468.545 7H468.455C462.661 7.01493 458.778 8.20968 457.971 8.97133C457.12 9.73298 456 13.6906 456 19.5C456 25.3094 457.12 29.267 457.971 30.0287C458.778 30.7754 462.661 31.9851 468.455 32H468.545C469.044 32 469.53 31.991 470 31.9741V40H472V46.4501C461.416 44.9879 449.1 44.0359 435.333 44H434.667C391.556 44.1123 362.667 53.0968 356.667 58.8244C350.333 64.552 342 94.313 342 138C342 181.687 350.333 211.448 356.667 217.176C362.667 222.791 391.556 231.888 434.667 232H435.333C449.1 232 461.416 231.072 472 229.623V235H470V242.029C469.53 242.011 469.044 242.001 468.545 242H468.455C462.661 242.015 458.778 243.21 457.971 243.971C457.12 244.733 456 248.691 456 254.5C456 260.309 457.12 264.267 457.971 265.029C458.778 265.775 462.661 266.985 468.455 267H468.545C469.044 267 469.53 266.991 470 266.974V275H0V266.842C1.056 266.939 2.21157 266.997 3.4552 267H3.5448C9.33931 267 13.2222 265.79 14.0287 265.029C14.8799 264.267 16 260.309 16 254.5C16 248.691 14.8799 244.733 14.0287 243.971C13.2222 243.225 9.33931 242.015 3.5448 242H3.4552C2.21157 242.003 1.056 242.061 0 242.157V235V229.737C10.3794 231.093 22.3504 231.966 35.6631 232H36.3369C79.9116 232 109.111 222.903 115.176 217.176C121.577 211.448 130 181.687 130 138C130 94.313 121.577 64.552 115.176 58.8244C109.111 53.2091 79.9116 44.1123 36.3369 44H35.6631C22.3504 44.0343 10.3794 44.8967 0 46.2414V40V31.8417C1.056 31.9386 2.21157 31.9968 3.4552 32H3.5448C9.33931 32 13.2222 30.7903 14.0287 30.0287C14.8799 29.267 16 25.3094 16 19.5C16 13.6906 14.8799 9.73298 14.0287 8.97133C13.2222 8.22461 9.33931 7.01493 3.5448 7H3.4552C2.21157 7.00321 1.056 7.06075 0 7.1567V0ZM34.4552 32H34.5448C40.3393 32 44.2222 30.7903 45.0287 30.0287C45.8799 29.267 47 25.3094 47 19.5C47 13.6906 45.8799 9.73298 45.0287 8.97133C44.2222 8.22461 40.3393 7.01493 34.5448 7H34.4552C28.6607 7.01493 24.7778 8.20968 23.9713 8.97133C23.1201 9.73298 22 13.6906 22 19.5C22 25.3094 23.1201 29.267 23.9713 30.0287C24.7778 30.7754 28.6607 31.9851 34.4552 32ZM65.5448 32H65.4552C59.6607 31.9851 55.7778 30.7754 54.9713 30.0287C54.1201 29.267 53 25.3094 53 19.5C53 13.6906 54.1201 9.73298 54.9713 8.97133C55.7778 8.20968 59.6607 7.01493 65.4552 7H65.5448C71.3393 7.01493 75.2222 8.22461 76.0287 8.97133C76.8799 9.73298 78 13.6906 78 19.5C78 25.3094 76.8799 29.267 76.0287 30.0287C75.2222 30.7903 71.3393 32 65.5448 32ZM96.4552 32H96.5448C102.339 32 106.222 30.7903 107.029 30.0287C107.88 29.267 109 25.3094 109 19.5C109 13.6906 107.88 9.73298 107.029 8.97133C106.222 8.22461 102.339 7.01493 96.5448 7H96.4552C90.6607 7.01493 86.7778 8.20968 85.9713 8.97133C85.1201 9.73298 84 13.6906 84 19.5C84 25.3094 85.1201 29.267 85.9713 30.0287C86.7778 30.7754 90.6607 31.9851 96.4552 32ZM127.545 32H127.455C121.661 31.9851 117.778 30.7754 116.971 30.0287C116.12 29.267 115 25.3094 115 19.5C115 13.6906 116.12 9.73298 116.971 8.97133C117.778 8.20968 121.661 7.01493 127.455 7H127.545C133.339 7.01493 137.222 8.22461 138.029 8.97133C138.88 9.73298 140 13.6906 140 19.5C140 25.3094 138.88 29.267 138.029 30.0287C137.222 30.7903 133.339 32 127.545 32ZM158.455 32H158.545C164.339 32 168.222 30.7903 169.029 30.0287C169.88 29.267 171 25.3094 171 19.5C171 13.6906 169.88 9.73298 169.029 8.97133C168.222 8.22461 164.339 7.01493 158.545 7H158.455C152.661 7.01493 148.778 8.20968 147.971 8.97133C147.12 9.73298 146 13.6906 146 19.5C146 25.3094 147.12 29.267 147.971 30.0287C148.778 30.7754 152.661 31.9851 158.455 32ZM189.545 32H189.455C183.661 31.9851 179.778 30.7754 178.971 30.0287C178.12 29.267 177 25.3094 177 19.5C177 13.6906 178.12 9.73298 178.971 8.97133C179.778 8.20968 183.661 7.01493 189.455 7H189.545C195.339 7.01493 199.222 8.22461 200.029 8.97133C200.88 9.73298 202 13.6906 202 19.5C202 25.3094 200.88 29.267 200.029 30.0287C199.222 30.7903 195.339 32 189.545 32ZM220.455 32H220.545C226.339 32 230.222 30.7903 231.029 30.0287C231.88 29.267 233 25.3094 233 19.5C233 13.6906 231.88 9.73298 231.029 8.97133C230.222 8.22461 226.339 7.01493 220.545 7H220.455C214.661 7.01493 210.778 8.20968 209.971 8.97133C209.12 9.73298 208 13.6906 208 19.5C208 25.3094 209.12 29.267 209.971 30.0287C210.778 30.7754 214.661 31.9851 220.455 32ZM251.545 32H251.455C245.661 31.9851 241.778 30.7754 240.971 30.0287C240.12 29.267 239 25.3094 239 19.5C239 13.6906 240.12 9.73298 240.971 8.97133C241.778 8.20968 245.661 7.01493 251.455 7H251.545C257.339 7.01493 261.222 8.22461 262.029 8.97133C262.88 9.73298 264 13.6906 264 19.5C264 25.3094 262.88 29.267 262.029 30.0287C261.222 30.7903 257.339 32 251.545 32ZM282.455 32H282.545C288.339 32 292.222 30.7903 293.029 30.0287C293.88 29.267 295 25.3094 295 19.5C295 13.6906 293.88 9.73298 293.029 8.97133C292.222 8.22461 288.339 7.01493 282.545 7H282.455C276.661 7.01493 272.778 8.20968 271.971 8.97133C271.12 9.73298 270 13.6906 270 19.5C270 25.3094 271.12 29.267 271.971 30.0287C272.778 30.7754 276.661 31.9851 282.455 32ZM313.545 32H313.455C307.661 31.9851 303.778 30.7754 302.971 30.0287C302.12 29.267 301 25.3094 301 19.5C301 13.6906 302.12 9.73298 302.971 8.97133C303.778 8.20968 307.661 7.01493 313.455 7H313.545C319.339 7.01493 323.222 8.22461 324.029 8.97133C324.88 9.73298 326 13.6906 326 19.5C326 25.3094 324.88 29.267 324.029 30.0287C323.222 30.7903 319.339 32 313.545 32ZM344.455 32H344.545C350.339 32 354.222 30.7903 355.029 30.0287C355.88 29.267 357 25.3094 357 19.5C357 13.6906 355.88 9.73298 355.029 8.97133C354.222 8.22461 350.339 7.01493 344.545 7H344.455C338.661 7.01493 334.778 8.20968 333.971 8.97133C333.12 9.73298 332 13.6906 332 19.5C332 25.3094 333.12 29.267 333.971 30.0287C334.778 30.7754 338.661 31.9851 344.455 32ZM375.545 32H375.455C369.661 31.9851 365.778 30.7754 364.971 30.0287C364.12 29.267 363 25.3094 363 19.5C363 13.6906 364.12 9.73298 364.971 8.97133C365.778 8.20968 369.661 7.01493 375.455 7H375.545C381.339 7.01493 385.222 8.22461 386.029 8.97133C386.88 9.73298 388 13.6906 388 19.5C388 25.3094 386.88 29.267 386.029 30.0287C385.222 30.7903 381.339 32 375.545 32ZM406.455 32H406.545C412.339 32 416.222 30.7903 417.029 30.0287C417.88 29.267 419 25.3094 419 19.5C419 13.6906 417.88 9.73298 417.029 8.97133C416.222 8.22461 412.339 7.01493 406.545 7H406.455C400.661 7.01493 396.778 8.20968 395.971 8.97133C395.12 9.73298 394 13.6906 394 19.5C394 25.3094 395.12 29.267 395.971 30.0287C396.778 30.7754 400.661 31.9851 406.455 32ZM437.545 32H437.455C431.661 31.9851 427.778 30.7754 426.971 30.0287C426.12 29.267 425 25.3094 425 19.5C425 13.6906 426.12 9.73298 426.971 8.97133C427.778 8.20968 431.661 7.01493 437.455 7H437.545C443.339 7.01493 447.222 8.22461 448.029 8.97133C448.88 9.73298 450 13.6906 450 19.5C450 25.3094 448.88 29.267 448.029 30.0287C447.222 30.7903 443.339 32 437.545 32ZM34.4552 267H34.5448C40.3393 267 44.2222 265.79 45.0287 265.029C45.8799 264.267 47 260.309 47 254.5C47 248.691 45.8799 244.733 45.0287 243.971C44.2222 243.225 40.3393 242.015 34.5448 242H34.4552C28.6607 242.015 24.7778 243.21 23.9713 243.971C23.1201 244.733 22 248.691 22 254.5C22 260.309 23.1201 264.267 23.9713 265.029C24.7778 265.775 28.6607 266.985 34.4552 267ZM65.5448 267H65.4552C59.6607 266.985 55.7778 265.775 54.9713 265.029C54.1201 264.267 53 260.309 53 254.5C53 248.691 54.1201 244.733 54.9713 243.971C55.7778 243.21 59.6607 242.015 65.4552 242H65.5448C71.3393 242.015 75.2222 243.225 76.0287 243.971C76.8799 244.733 78 248.691 78 254.5C78 260.309 76.8799 264.267 76.0287 265.029C75.2222 265.79 71.3393 267 65.5448 267ZM96.4552 267H96.5448C102.339 267 106.222 265.79 107.029 265.029C107.88 264.267 109 260.309 109 254.5C109 248.691 107.88 244.733 107.029 243.971C106.222 243.225 102.339 242.015 96.5448 242H96.4552C90.6607 242.015 86.7778 243.21 85.9713 243.971C85.1201 244.733 84 248.691 84 254.5C84 260.309 85.1201 264.267 85.9713 265.029C86.7778 265.775 90.6607 266.985 96.4552 267ZM127.545 267H127.455C121.661 266.985 117.778 265.775 116.971 265.029C116.12 264.267 115 260.309 115 254.5C115 248.691 116.12 244.733 116.971 243.971C117.778 243.21 121.661 242.015 127.455 242H127.545C133.339 242.015 137.222 243.225 138.029 243.971C138.88 244.733 140 248.691 140 254.5C140 260.309 138.88 264.267 138.029 265.029C137.222 265.79 133.339 267 127.545 267ZM158.455 267H158.545C164.339 267 168.222 265.79 169.029 265.029C169.88 264.267 171 260.309 171 254.5C171 248.691 169.88 244.733 169.029 243.971C168.222 243.225 164.339 242.015 158.545 242H158.455C152.661 242.015 148.778 243.21 147.971 243.971C147.12 244.733 146 248.691 146 254.5C146 260.309 147.12 264.267 147.971 265.029C148.778 265.775 152.661 266.985 158.455 267ZM189.545 267H189.455C183.661 266.985 179.778 265.775 178.971 265.029C178.12 264.267 177 260.309 177 254.5C177 248.691 178.12 244.733 178.971 243.971C179.778 243.21 183.661 242.015 189.455 242H189.545C195.339 242.015 199.222 243.225 200.029 243.971C200.88 244.733 202 248.691 202 254.5C202 260.309 200.88 264.267 200.029 265.029C199.222 265.79 195.339 267 189.545 267ZM220.455 267H220.545C226.339 267 230.222 265.79 231.029 265.029C231.88 264.267 233 260.309 233 254.5C233 248.691 231.88 244.733 231.029 243.971C230.222 243.225 226.339 242.015 220.545 242H220.455C214.661 242.015 210.778 243.21 209.971 243.971C209.12 244.733 208 248.691 208 254.5C208 260.309 209.12 264.267 209.971 265.029C210.778 265.775 214.661 266.985 220.455 267ZM251.545 267H251.455C245.661 266.985 241.778 265.775 240.971 265.029C240.12 264.267 239 260.309 239 254.5C239 248.691 240.12 244.733 240.971 243.971C241.778 243.21 245.661 242.015 251.455 242H251.545C257.339 242.015 261.222 243.225 262.029 243.971C262.88 244.733 264 248.691 264 254.5C264 260.309 262.88 264.267 262.029 265.029C261.222 265.79 257.339 267 251.545 267ZM282.455 267H282.545C288.339 267 292.222 265.79 293.029 265.029C293.88 264.267 295 260.309 295 254.5C295 248.691 293.88 244.733 293.029 243.971C292.222 243.225 288.339 242.015 282.545 242H282.455C276.661 242.015 272.778 243.21 271.971 243.971C271.12 244.733 270 248.691 270 254.5C270 260.309 271.12 264.267 271.971 265.029C272.778 265.775 276.661 266.985 282.455 267ZM313.545 267H313.455C307.661 266.985 303.778 265.775 302.971 265.029C302.12 264.267 301 260.309 301 254.5C301 248.691 302.12 244.733 302.971 243.971C303.778 243.21 307.661 242.015 313.455 242H313.545C319.339 242.015 323.222 243.225 324.029 243.971C324.88 244.733 326 248.691 326 254.5C326 260.309 324.88 264.267 324.029 265.029C323.222 265.79 319.339 267 313.545 267ZM344.455 267H344.545C350.339 267 354.222 265.79 355.029 265.029C355.88 264.267 357 260.309 357 254.5C357 248.691 355.88 244.733 355.029 243.971C354.222 243.225 350.339 242.015 344.545 242H344.455C338.661 242.015 334.778 243.21 333.971 243.971C333.12 244.733 332 248.691 332 254.5C332 260.309 333.12 264.267 333.971 265.029C334.778 265.775 338.661 266.985 344.455 267ZM375.545 267H375.455C369.661 266.985 365.778 265.775 364.971 265.029C364.12 264.267 363 260.309 363 254.5C363 248.691 364.12 244.733 364.971 243.971C365.778 243.21 369.661 242.015 375.455 242H375.545C381.339 242.015 385.222 243.225 386.029 243.971C386.88 244.733 388 248.691 388 254.5C388 260.309 386.88 264.267 386.029 265.029C385.222 265.79 381.339 267 375.545 267ZM406.455 267H406.545C412.339 267 416.222 265.79 417.029 265.029C417.88 264.267 419 260.309 419 254.5C419 248.691 417.88 244.733 417.029 243.971C416.222 243.225 412.339 242.015 406.545 242H406.455C400.661 242.015 396.778 243.21 395.971 243.971C395.12 244.733 394 248.691 394 254.5C394 260.309 395.12 264.267 395.971 265.029C396.778 265.775 400.661 266.985 406.455 267ZM437.545 267H437.455C431.661 266.985 427.778 265.775 426.971 265.029C426.12 264.267 425 260.309 425 254.5C425 248.691 426.12 244.733 426.971 243.971C427.778 243.21 431.661 242.015 437.455 242H437.545C443.339 242.015 447.222 243.225 448.029 243.971C448.88 244.733 450 248.691 450 254.5C450 260.309 448.88 264.267 448.029 265.029C447.222 265.79 443.339 267 437.545 267ZM235.667 232H236.333C279.444 232 308.333 222.903 314.333 217.176C320.667 211.448 329 181.687 329 138C329 94.313 320.667 64.552 314.333 58.8244C308.333 53.2091 279.444 44.1123 236.333 44H235.667C192.556 44.1123 163.667 53.0968 157.667 58.8244C151.333 64.552 143 94.313 143 138C143 181.687 151.333 211.448 157.667 217.176C163.667 222.791 192.556 231.888 235.667 232Z"
          fill="url(#paint1_linear_38_15833)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H470V7.02944C469.53 7.01145 469.044 7.00129 468.545 7H468.455C462.661 7.01493 458.778 8.20968 457.971 8.97133C457.12 9.73298 456 13.6906 456 19.5C456 25.3094 457.12 29.267 457.971 30.0287C458.778 30.7754 462.661 31.9851 468.455 32H468.545C469.044 32 469.53 31.991 470 31.9741V40H472V46.4501C461.416 44.9879 449.1 44.0359 435.333 44H434.667C391.556 44.1123 362.667 53.0968 356.667 58.8244C350.333 64.552 342 94.313 342 138C342 181.687 350.333 211.448 356.667 217.176C362.667 222.791 391.556 231.888 434.667 232H435.333C449.1 232 461.416 231.072 472 229.623V235H470V242.029C469.53 242.011 469.044 242.001 468.545 242H468.455C462.661 242.015 458.778 243.21 457.971 243.971C457.12 244.733 456 248.691 456 254.5C456 260.309 457.12 264.267 457.971 265.029C458.778 265.775 462.661 266.985 468.455 267H468.545C469.044 267 469.53 266.991 470 266.974V275H0V266.842C1.056 266.939 2.21157 266.997 3.4552 267H3.5448C9.33931 267 13.2222 265.79 14.0287 265.029C14.8799 264.267 16 260.309 16 254.5C16 248.691 14.8799 244.733 14.0287 243.971C13.2222 243.225 9.33931 242.015 3.5448 242H3.4552C2.21157 242.003 1.056 242.061 0 242.157V235V229.737C10.3794 231.093 22.3504 231.966 35.6631 232H36.3369C79.9116 232 109.111 222.903 115.176 217.176C121.577 211.448 130 181.687 130 138C130 94.313 121.577 64.552 115.176 58.8244C109.111 53.2091 79.9116 44.1123 36.3369 44H35.6631C22.3504 44.0343 10.3794 44.8967 0 46.2414V40V31.8417C1.056 31.9386 2.21157 31.9968 3.4552 32H3.5448C9.33931 32 13.2222 30.7903 14.0287 30.0287C14.8799 29.267 16 25.3094 16 19.5C16 13.6906 14.8799 9.73298 14.0287 8.97133C13.2222 8.22461 9.33931 7.01493 3.5448 7H3.4552C2.21157 7.00321 1.056 7.06075 0 7.1567V0ZM34.4552 32H34.5448C40.3393 32 44.2222 30.7903 45.0287 30.0287C45.8799 29.267 47 25.3094 47 19.5C47 13.6906 45.8799 9.73298 45.0287 8.97133C44.2222 8.22461 40.3393 7.01493 34.5448 7H34.4552C28.6607 7.01493 24.7778 8.20968 23.9713 8.97133C23.1201 9.73298 22 13.6906 22 19.5C22 25.3094 23.1201 29.267 23.9713 30.0287C24.7778 30.7754 28.6607 31.9851 34.4552 32ZM65.5448 32H65.4552C59.6607 31.9851 55.7778 30.7754 54.9713 30.0287C54.1201 29.267 53 25.3094 53 19.5C53 13.6906 54.1201 9.73298 54.9713 8.97133C55.7778 8.20968 59.6607 7.01493 65.4552 7H65.5448C71.3393 7.01493 75.2222 8.22461 76.0287 8.97133C76.8799 9.73298 78 13.6906 78 19.5C78 25.3094 76.8799 29.267 76.0287 30.0287C75.2222 30.7903 71.3393 32 65.5448 32ZM96.4552 32H96.5448C102.339 32 106.222 30.7903 107.029 30.0287C107.88 29.267 109 25.3094 109 19.5C109 13.6906 107.88 9.73298 107.029 8.97133C106.222 8.22461 102.339 7.01493 96.5448 7H96.4552C90.6607 7.01493 86.7778 8.20968 85.9713 8.97133C85.1201 9.73298 84 13.6906 84 19.5C84 25.3094 85.1201 29.267 85.9713 30.0287C86.7778 30.7754 90.6607 31.9851 96.4552 32ZM127.545 32H127.455C121.661 31.9851 117.778 30.7754 116.971 30.0287C116.12 29.267 115 25.3094 115 19.5C115 13.6906 116.12 9.73298 116.971 8.97133C117.778 8.20968 121.661 7.01493 127.455 7H127.545C133.339 7.01493 137.222 8.22461 138.029 8.97133C138.88 9.73298 140 13.6906 140 19.5C140 25.3094 138.88 29.267 138.029 30.0287C137.222 30.7903 133.339 32 127.545 32ZM158.455 32H158.545C164.339 32 168.222 30.7903 169.029 30.0287C169.88 29.267 171 25.3094 171 19.5C171 13.6906 169.88 9.73298 169.029 8.97133C168.222 8.22461 164.339 7.01493 158.545 7H158.455C152.661 7.01493 148.778 8.20968 147.971 8.97133C147.12 9.73298 146 13.6906 146 19.5C146 25.3094 147.12 29.267 147.971 30.0287C148.778 30.7754 152.661 31.9851 158.455 32ZM189.545 32H189.455C183.661 31.9851 179.778 30.7754 178.971 30.0287C178.12 29.267 177 25.3094 177 19.5C177 13.6906 178.12 9.73298 178.971 8.97133C179.778 8.20968 183.661 7.01493 189.455 7H189.545C195.339 7.01493 199.222 8.22461 200.029 8.97133C200.88 9.73298 202 13.6906 202 19.5C202 25.3094 200.88 29.267 200.029 30.0287C199.222 30.7903 195.339 32 189.545 32ZM220.455 32H220.545C226.339 32 230.222 30.7903 231.029 30.0287C231.88 29.267 233 25.3094 233 19.5C233 13.6906 231.88 9.73298 231.029 8.97133C230.222 8.22461 226.339 7.01493 220.545 7H220.455C214.661 7.01493 210.778 8.20968 209.971 8.97133C209.12 9.73298 208 13.6906 208 19.5C208 25.3094 209.12 29.267 209.971 30.0287C210.778 30.7754 214.661 31.9851 220.455 32ZM251.545 32H251.455C245.661 31.9851 241.778 30.7754 240.971 30.0287C240.12 29.267 239 25.3094 239 19.5C239 13.6906 240.12 9.73298 240.971 8.97133C241.778 8.20968 245.661 7.01493 251.455 7H251.545C257.339 7.01493 261.222 8.22461 262.029 8.97133C262.88 9.73298 264 13.6906 264 19.5C264 25.3094 262.88 29.267 262.029 30.0287C261.222 30.7903 257.339 32 251.545 32ZM282.455 32H282.545C288.339 32 292.222 30.7903 293.029 30.0287C293.88 29.267 295 25.3094 295 19.5C295 13.6906 293.88 9.73298 293.029 8.97133C292.222 8.22461 288.339 7.01493 282.545 7H282.455C276.661 7.01493 272.778 8.20968 271.971 8.97133C271.12 9.73298 270 13.6906 270 19.5C270 25.3094 271.12 29.267 271.971 30.0287C272.778 30.7754 276.661 31.9851 282.455 32ZM313.545 32H313.455C307.661 31.9851 303.778 30.7754 302.971 30.0287C302.12 29.267 301 25.3094 301 19.5C301 13.6906 302.12 9.73298 302.971 8.97133C303.778 8.20968 307.661 7.01493 313.455 7H313.545C319.339 7.01493 323.222 8.22461 324.029 8.97133C324.88 9.73298 326 13.6906 326 19.5C326 25.3094 324.88 29.267 324.029 30.0287C323.222 30.7903 319.339 32 313.545 32ZM344.455 32H344.545C350.339 32 354.222 30.7903 355.029 30.0287C355.88 29.267 357 25.3094 357 19.5C357 13.6906 355.88 9.73298 355.029 8.97133C354.222 8.22461 350.339 7.01493 344.545 7H344.455C338.661 7.01493 334.778 8.20968 333.971 8.97133C333.12 9.73298 332 13.6906 332 19.5C332 25.3094 333.12 29.267 333.971 30.0287C334.778 30.7754 338.661 31.9851 344.455 32ZM375.545 32H375.455C369.661 31.9851 365.778 30.7754 364.971 30.0287C364.12 29.267 363 25.3094 363 19.5C363 13.6906 364.12 9.73298 364.971 8.97133C365.778 8.20968 369.661 7.01493 375.455 7H375.545C381.339 7.01493 385.222 8.22461 386.029 8.97133C386.88 9.73298 388 13.6906 388 19.5C388 25.3094 386.88 29.267 386.029 30.0287C385.222 30.7903 381.339 32 375.545 32ZM406.455 32H406.545C412.339 32 416.222 30.7903 417.029 30.0287C417.88 29.267 419 25.3094 419 19.5C419 13.6906 417.88 9.73298 417.029 8.97133C416.222 8.22461 412.339 7.01493 406.545 7H406.455C400.661 7.01493 396.778 8.20968 395.971 8.97133C395.12 9.73298 394 13.6906 394 19.5C394 25.3094 395.12 29.267 395.971 30.0287C396.778 30.7754 400.661 31.9851 406.455 32ZM437.545 32H437.455C431.661 31.9851 427.778 30.7754 426.971 30.0287C426.12 29.267 425 25.3094 425 19.5C425 13.6906 426.12 9.73298 426.971 8.97133C427.778 8.20968 431.661 7.01493 437.455 7H437.545C443.339 7.01493 447.222 8.22461 448.029 8.97133C448.88 9.73298 450 13.6906 450 19.5C450 25.3094 448.88 29.267 448.029 30.0287C447.222 30.7903 443.339 32 437.545 32ZM34.4552 267H34.5448C40.3393 267 44.2222 265.79 45.0287 265.029C45.8799 264.267 47 260.309 47 254.5C47 248.691 45.8799 244.733 45.0287 243.971C44.2222 243.225 40.3393 242.015 34.5448 242H34.4552C28.6607 242.015 24.7778 243.21 23.9713 243.971C23.1201 244.733 22 248.691 22 254.5C22 260.309 23.1201 264.267 23.9713 265.029C24.7778 265.775 28.6607 266.985 34.4552 267ZM65.5448 267H65.4552C59.6607 266.985 55.7778 265.775 54.9713 265.029C54.1201 264.267 53 260.309 53 254.5C53 248.691 54.1201 244.733 54.9713 243.971C55.7778 243.21 59.6607 242.015 65.4552 242H65.5448C71.3393 242.015 75.2222 243.225 76.0287 243.971C76.8799 244.733 78 248.691 78 254.5C78 260.309 76.8799 264.267 76.0287 265.029C75.2222 265.79 71.3393 267 65.5448 267ZM96.4552 267H96.5448C102.339 267 106.222 265.79 107.029 265.029C107.88 264.267 109 260.309 109 254.5C109 248.691 107.88 244.733 107.029 243.971C106.222 243.225 102.339 242.015 96.5448 242H96.4552C90.6607 242.015 86.7778 243.21 85.9713 243.971C85.1201 244.733 84 248.691 84 254.5C84 260.309 85.1201 264.267 85.9713 265.029C86.7778 265.775 90.6607 266.985 96.4552 267ZM127.545 267H127.455C121.661 266.985 117.778 265.775 116.971 265.029C116.12 264.267 115 260.309 115 254.5C115 248.691 116.12 244.733 116.971 243.971C117.778 243.21 121.661 242.015 127.455 242H127.545C133.339 242.015 137.222 243.225 138.029 243.971C138.88 244.733 140 248.691 140 254.5C140 260.309 138.88 264.267 138.029 265.029C137.222 265.79 133.339 267 127.545 267ZM158.455 267H158.545C164.339 267 168.222 265.79 169.029 265.029C169.88 264.267 171 260.309 171 254.5C171 248.691 169.88 244.733 169.029 243.971C168.222 243.225 164.339 242.015 158.545 242H158.455C152.661 242.015 148.778 243.21 147.971 243.971C147.12 244.733 146 248.691 146 254.5C146 260.309 147.12 264.267 147.971 265.029C148.778 265.775 152.661 266.985 158.455 267ZM189.545 267H189.455C183.661 266.985 179.778 265.775 178.971 265.029C178.12 264.267 177 260.309 177 254.5C177 248.691 178.12 244.733 178.971 243.971C179.778 243.21 183.661 242.015 189.455 242H189.545C195.339 242.015 199.222 243.225 200.029 243.971C200.88 244.733 202 248.691 202 254.5C202 260.309 200.88 264.267 200.029 265.029C199.222 265.79 195.339 267 189.545 267ZM220.455 267H220.545C226.339 267 230.222 265.79 231.029 265.029C231.88 264.267 233 260.309 233 254.5C233 248.691 231.88 244.733 231.029 243.971C230.222 243.225 226.339 242.015 220.545 242H220.455C214.661 242.015 210.778 243.21 209.971 243.971C209.12 244.733 208 248.691 208 254.5C208 260.309 209.12 264.267 209.971 265.029C210.778 265.775 214.661 266.985 220.455 267ZM251.545 267H251.455C245.661 266.985 241.778 265.775 240.971 265.029C240.12 264.267 239 260.309 239 254.5C239 248.691 240.12 244.733 240.971 243.971C241.778 243.21 245.661 242.015 251.455 242H251.545C257.339 242.015 261.222 243.225 262.029 243.971C262.88 244.733 264 248.691 264 254.5C264 260.309 262.88 264.267 262.029 265.029C261.222 265.79 257.339 267 251.545 267ZM282.455 267H282.545C288.339 267 292.222 265.79 293.029 265.029C293.88 264.267 295 260.309 295 254.5C295 248.691 293.88 244.733 293.029 243.971C292.222 243.225 288.339 242.015 282.545 242H282.455C276.661 242.015 272.778 243.21 271.971 243.971C271.12 244.733 270 248.691 270 254.5C270 260.309 271.12 264.267 271.971 265.029C272.778 265.775 276.661 266.985 282.455 267ZM313.545 267H313.455C307.661 266.985 303.778 265.775 302.971 265.029C302.12 264.267 301 260.309 301 254.5C301 248.691 302.12 244.733 302.971 243.971C303.778 243.21 307.661 242.015 313.455 242H313.545C319.339 242.015 323.222 243.225 324.029 243.971C324.88 244.733 326 248.691 326 254.5C326 260.309 324.88 264.267 324.029 265.029C323.222 265.79 319.339 267 313.545 267ZM344.455 267H344.545C350.339 267 354.222 265.79 355.029 265.029C355.88 264.267 357 260.309 357 254.5C357 248.691 355.88 244.733 355.029 243.971C354.222 243.225 350.339 242.015 344.545 242H344.455C338.661 242.015 334.778 243.21 333.971 243.971C333.12 244.733 332 248.691 332 254.5C332 260.309 333.12 264.267 333.971 265.029C334.778 265.775 338.661 266.985 344.455 267ZM375.545 267H375.455C369.661 266.985 365.778 265.775 364.971 265.029C364.12 264.267 363 260.309 363 254.5C363 248.691 364.12 244.733 364.971 243.971C365.778 243.21 369.661 242.015 375.455 242H375.545C381.339 242.015 385.222 243.225 386.029 243.971C386.88 244.733 388 248.691 388 254.5C388 260.309 386.88 264.267 386.029 265.029C385.222 265.79 381.339 267 375.545 267ZM406.455 267H406.545C412.339 267 416.222 265.79 417.029 265.029C417.88 264.267 419 260.309 419 254.5C419 248.691 417.88 244.733 417.029 243.971C416.222 243.225 412.339 242.015 406.545 242H406.455C400.661 242.015 396.778 243.21 395.971 243.971C395.12 244.733 394 248.691 394 254.5C394 260.309 395.12 264.267 395.971 265.029C396.778 265.775 400.661 266.985 406.455 267ZM437.545 267H437.455C431.661 266.985 427.778 265.775 426.971 265.029C426.12 264.267 425 260.309 425 254.5C425 248.691 426.12 244.733 426.971 243.971C427.778 243.21 431.661 242.015 437.455 242H437.545C443.339 242.015 447.222 243.225 448.029 243.971C448.88 244.733 450 248.691 450 254.5C450 260.309 448.88 264.267 448.029 265.029C447.222 265.79 443.339 267 437.545 267ZM235.667 232H236.333C279.444 232 308.333 222.903 314.333 217.176C320.667 211.448 329 181.687 329 138C329 94.313 320.667 64.552 314.333 58.8244C308.333 53.2091 279.444 44.1123 236.333 44H235.667C192.556 44.1123 163.667 53.0968 157.667 58.8244C151.333 64.552 143 94.313 143 138C143 181.687 151.333 211.448 157.667 217.176C163.667 222.791 192.556 231.888 235.667 232Z"
          fill="url(#paint2_linear_38_15833)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_38_15833"
            x1="62.5"
            y1="-10"
            x2="434.5"
            y2="275"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D39C28" />
            <stop offset="0.296528" stopColor="#EBA900" />
            <stop offset="0.494792" stopColor="#F3DC6E" />
            <stop offset="0.714267" stopColor="#EBA900" />
            <stop offset="1" stopColor="#D39C28" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_38_15833"
            x1="62.5"
            y1="-10"
            x2="434.5"
            y2="275"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D39C28" />
            <stop offset="0.296528" stopColor="#EBA900" />
            <stop offset="0.494792" stopColor="#F3DC6E" />
            <stop offset="0.714267" stopColor="#EBA900" />
            <stop offset="1" stopColor="#D39C28" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_38_15833"
            x1="62.5"
            y1="-10"
            x2="434.5"
            y2="275"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D39C28" />
            <stop offset="0.296528" stopColor="#EBA900" />
            <stop offset="0.494792" stopColor="#F3DC6E" />
            <stop offset="0.714267" stopColor="#EBA900" />
            <stop offset="1" stopColor="#D39C28" />
          </linearGradient>
          <clipPath id="clip0_38_15833">
            <rect
              width="472"
              height="197"
              fill="white"
              transform="translate(0 39)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  }
  return (
    <svg
      width="0"
      height="0"
      viewBox="0 0 472 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <rect y="38" width="472" height="197" className="fill-[#011F4F]" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H470V7.02944C469.53 7.01145 469.044 7.00129 468.545 7H468.455C462.661 7.01493 458.778 8.20968 457.971 8.97133C457.12 9.73298 456 13.6906 456 19.5C456 25.3094 457.12 29.267 457.971 30.0287C458.778 30.7754 462.661 31.9851 468.455 32H468.545C469.044 32 469.53 31.991 470 31.9741V40H472V46.4501C461.416 44.9879 449.1 44.0359 435.333 44H434.667C391.556 44.1123 362.667 53.0968 356.667 58.8244C350.333 64.552 342 94.313 342 138C342 181.687 350.333 211.448 356.667 217.176C362.667 222.791 391.556 231.888 434.667 232H435.333C449.1 232 461.416 231.072 472 229.623V235H470V242.029C469.53 242.011 469.044 242.001 468.545 242H468.455C462.661 242.015 458.778 243.21 457.971 243.971C457.12 244.733 456 248.691 456 254.5C456 260.309 457.12 264.267 457.971 265.029C458.778 265.775 462.661 266.985 468.455 267H468.545C469.044 267 469.53 266.991 470 266.974V275H0V266.842C1.056 266.939 2.21157 266.997 3.4552 267H3.5448C9.33931 267 13.2222 265.79 14.0287 265.029C14.8799 264.267 16 260.309 16 254.5C16 248.691 14.8799 244.733 14.0287 243.971C13.2222 243.225 9.33931 242.015 3.5448 242H3.4552C2.21157 242.003 1.056 242.061 0 242.157V235V229.737C10.3794 231.093 22.3504 231.966 35.6631 232H36.3369C79.9116 232 109.111 222.903 115.176 217.176C121.577 211.448 130 181.687 130 138C130 94.313 121.577 64.552 115.176 58.8244C109.111 53.2091 79.9116 44.1123 36.3369 44H35.6631C22.3504 44.0343 10.3794 44.8967 0 46.2414V40V31.8417C1.056 31.9386 2.21157 31.9968 3.4552 32H3.5448C9.33931 32 13.2222 30.7903 14.0287 30.0287C14.8799 29.267 16 25.3094 16 19.5C16 13.6906 14.8799 9.73298 14.0287 8.97133C13.2222 8.22461 9.33931 7.01493 3.5448 7H3.4552C2.21157 7.00321 1.056 7.06075 0 7.1567V0ZM34.4552 32H34.5448C40.3393 32 44.2222 30.7903 45.0287 30.0287C45.8799 29.267 47 25.3094 47 19.5C47 13.6906 45.8799 9.73298 45.0287 8.97133C44.2222 8.22461 40.3393 7.01493 34.5448 7H34.4552C28.6607 7.01493 24.7778 8.20968 23.9713 8.97133C23.1201 9.73298 22 13.6906 22 19.5C22 25.3094 23.1201 29.267 23.9713 30.0287C24.7778 30.7754 28.6607 31.9851 34.4552 32ZM65.5448 32H65.4552C59.6607 31.9851 55.7778 30.7754 54.9713 30.0287C54.1201 29.267 53 25.3094 53 19.5C53 13.6906 54.1201 9.73298 54.9713 8.97133C55.7778 8.20968 59.6607 7.01493 65.4552 7H65.5448C71.3393 7.01493 75.2222 8.22461 76.0287 8.97133C76.8799 9.73298 78 13.6906 78 19.5C78 25.3094 76.8799 29.267 76.0287 30.0287C75.2222 30.7903 71.3393 32 65.5448 32ZM96.4552 32H96.5448C102.339 32 106.222 30.7903 107.029 30.0287C107.88 29.267 109 25.3094 109 19.5C109 13.6906 107.88 9.73298 107.029 8.97133C106.222 8.22461 102.339 7.01493 96.5448 7H96.4552C90.6607 7.01493 86.7778 8.20968 85.9713 8.97133C85.1201 9.73298 84 13.6906 84 19.5C84 25.3094 85.1201 29.267 85.9713 30.0287C86.7778 30.7754 90.6607 31.9851 96.4552 32ZM127.545 32H127.455C121.661 31.9851 117.778 30.7754 116.971 30.0287C116.12 29.267 115 25.3094 115 19.5C115 13.6906 116.12 9.73298 116.971 8.97133C117.778 8.20968 121.661 7.01493 127.455 7H127.545C133.339 7.01493 137.222 8.22461 138.029 8.97133C138.88 9.73298 140 13.6906 140 19.5C140 25.3094 138.88 29.267 138.029 30.0287C137.222 30.7903 133.339 32 127.545 32ZM158.455 32H158.545C164.339 32 168.222 30.7903 169.029 30.0287C169.88 29.267 171 25.3094 171 19.5C171 13.6906 169.88 9.73298 169.029 8.97133C168.222 8.22461 164.339 7.01493 158.545 7H158.455C152.661 7.01493 148.778 8.20968 147.971 8.97133C147.12 9.73298 146 13.6906 146 19.5C146 25.3094 147.12 29.267 147.971 30.0287C148.778 30.7754 152.661 31.9851 158.455 32ZM189.545 32H189.455C183.661 31.9851 179.778 30.7754 178.971 30.0287C178.12 29.267 177 25.3094 177 19.5C177 13.6906 178.12 9.73298 178.971 8.97133C179.778 8.20968 183.661 7.01493 189.455 7H189.545C195.339 7.01493 199.222 8.22461 200.029 8.97133C200.88 9.73298 202 13.6906 202 19.5C202 25.3094 200.88 29.267 200.029 30.0287C199.222 30.7903 195.339 32 189.545 32ZM220.455 32H220.545C226.339 32 230.222 30.7903 231.029 30.0287C231.88 29.267 233 25.3094 233 19.5C233 13.6906 231.88 9.73298 231.029 8.97133C230.222 8.22461 226.339 7.01493 220.545 7H220.455C214.661 7.01493 210.778 8.20968 209.971 8.97133C209.12 9.73298 208 13.6906 208 19.5C208 25.3094 209.12 29.267 209.971 30.0287C210.778 30.7754 214.661 31.9851 220.455 32ZM251.545 32H251.455C245.661 31.9851 241.778 30.7754 240.971 30.0287C240.12 29.267 239 25.3094 239 19.5C239 13.6906 240.12 9.73298 240.971 8.97133C241.778 8.20968 245.661 7.01493 251.455 7H251.545C257.339 7.01493 261.222 8.22461 262.029 8.97133C262.88 9.73298 264 13.6906 264 19.5C264 25.3094 262.88 29.267 262.029 30.0287C261.222 30.7903 257.339 32 251.545 32ZM282.455 32H282.545C288.339 32 292.222 30.7903 293.029 30.0287C293.88 29.267 295 25.3094 295 19.5C295 13.6906 293.88 9.73298 293.029 8.97133C292.222 8.22461 288.339 7.01493 282.545 7H282.455C276.661 7.01493 272.778 8.20968 271.971 8.97133C271.12 9.73298 270 13.6906 270 19.5C270 25.3094 271.12 29.267 271.971 30.0287C272.778 30.7754 276.661 31.9851 282.455 32ZM313.545 32H313.455C307.661 31.9851 303.778 30.7754 302.971 30.0287C302.12 29.267 301 25.3094 301 19.5C301 13.6906 302.12 9.73298 302.971 8.97133C303.778 8.20968 307.661 7.01493 313.455 7H313.545C319.339 7.01493 323.222 8.22461 324.029 8.97133C324.88 9.73298 326 13.6906 326 19.5C326 25.3094 324.88 29.267 324.029 30.0287C323.222 30.7903 319.339 32 313.545 32ZM344.455 32H344.545C350.339 32 354.222 30.7903 355.029 30.0287C355.88 29.267 357 25.3094 357 19.5C357 13.6906 355.88 9.73298 355.029 8.97133C354.222 8.22461 350.339 7.01493 344.545 7H344.455C338.661 7.01493 334.778 8.20968 333.971 8.97133C333.12 9.73298 332 13.6906 332 19.5C332 25.3094 333.12 29.267 333.971 30.0287C334.778 30.7754 338.661 31.9851 344.455 32ZM375.545 32H375.455C369.661 31.9851 365.778 30.7754 364.971 30.0287C364.12 29.267 363 25.3094 363 19.5C363 13.6906 364.12 9.73298 364.971 8.97133C365.778 8.20968 369.661 7.01493 375.455 7H375.545C381.339 7.01493 385.222 8.22461 386.029 8.97133C386.88 9.73298 388 13.6906 388 19.5C388 25.3094 386.88 29.267 386.029 30.0287C385.222 30.7903 381.339 32 375.545 32ZM406.455 32H406.545C412.339 32 416.222 30.7903 417.029 30.0287C417.88 29.267 419 25.3094 419 19.5C419 13.6906 417.88 9.73298 417.029 8.97133C416.222 8.22461 412.339 7.01493 406.545 7H406.455C400.661 7.01493 396.778 8.20968 395.971 8.97133C395.12 9.73298 394 13.6906 394 19.5C394 25.3094 395.12 29.267 395.971 30.0287C396.778 30.7754 400.661 31.9851 406.455 32ZM437.545 32H437.455C431.661 31.9851 427.778 30.7754 426.971 30.0287C426.12 29.267 425 25.3094 425 19.5C425 13.6906 426.12 9.73298 426.971 8.97133C427.778 8.20968 431.661 7.01493 437.455 7H437.545C443.339 7.01493 447.222 8.22461 448.029 8.97133C448.88 9.73298 450 13.6906 450 19.5C450 25.3094 448.88 29.267 448.029 30.0287C447.222 30.7903 443.339 32 437.545 32ZM34.4552 267H34.5448C40.3393 267 44.2222 265.79 45.0287 265.029C45.8799 264.267 47 260.309 47 254.5C47 248.691 45.8799 244.733 45.0287 243.971C44.2222 243.225 40.3393 242.015 34.5448 242H34.4552C28.6607 242.015 24.7778 243.21 23.9713 243.971C23.1201 244.733 22 248.691 22 254.5C22 260.309 23.1201 264.267 23.9713 265.029C24.7778 265.775 28.6607 266.985 34.4552 267ZM65.5448 267H65.4552C59.6607 266.985 55.7778 265.775 54.9713 265.029C54.1201 264.267 53 260.309 53 254.5C53 248.691 54.1201 244.733 54.9713 243.971C55.7778 243.21 59.6607 242.015 65.4552 242H65.5448C71.3393 242.015 75.2222 243.225 76.0287 243.971C76.8799 244.733 78 248.691 78 254.5C78 260.309 76.8799 264.267 76.0287 265.029C75.2222 265.79 71.3393 267 65.5448 267ZM96.4552 267H96.5448C102.339 267 106.222 265.79 107.029 265.029C107.88 264.267 109 260.309 109 254.5C109 248.691 107.88 244.733 107.029 243.971C106.222 243.225 102.339 242.015 96.5448 242H96.4552C90.6607 242.015 86.7778 243.21 85.9713 243.971C85.1201 244.733 84 248.691 84 254.5C84 260.309 85.1201 264.267 85.9713 265.029C86.7778 265.775 90.6607 266.985 96.4552 267ZM127.545 267H127.455C121.661 266.985 117.778 265.775 116.971 265.029C116.12 264.267 115 260.309 115 254.5C115 248.691 116.12 244.733 116.971 243.971C117.778 243.21 121.661 242.015 127.455 242H127.545C133.339 242.015 137.222 243.225 138.029 243.971C138.88 244.733 140 248.691 140 254.5C140 260.309 138.88 264.267 138.029 265.029C137.222 265.79 133.339 267 127.545 267ZM158.455 267H158.545C164.339 267 168.222 265.79 169.029 265.029C169.88 264.267 171 260.309 171 254.5C171 248.691 169.88 244.733 169.029 243.971C168.222 243.225 164.339 242.015 158.545 242H158.455C152.661 242.015 148.778 243.21 147.971 243.971C147.12 244.733 146 248.691 146 254.5C146 260.309 147.12 264.267 147.971 265.029C148.778 265.775 152.661 266.985 158.455 267ZM189.545 267H189.455C183.661 266.985 179.778 265.775 178.971 265.029C178.12 264.267 177 260.309 177 254.5C177 248.691 178.12 244.733 178.971 243.971C179.778 243.21 183.661 242.015 189.455 242H189.545C195.339 242.015 199.222 243.225 200.029 243.971C200.88 244.733 202 248.691 202 254.5C202 260.309 200.88 264.267 200.029 265.029C199.222 265.79 195.339 267 189.545 267ZM220.455 267H220.545C226.339 267 230.222 265.79 231.029 265.029C231.88 264.267 233 260.309 233 254.5C233 248.691 231.88 244.733 231.029 243.971C230.222 243.225 226.339 242.015 220.545 242H220.455C214.661 242.015 210.778 243.21 209.971 243.971C209.12 244.733 208 248.691 208 254.5C208 260.309 209.12 264.267 209.971 265.029C210.778 265.775 214.661 266.985 220.455 267ZM251.545 267H251.455C245.661 266.985 241.778 265.775 240.971 265.029C240.12 264.267 239 260.309 239 254.5C239 248.691 240.12 244.733 240.971 243.971C241.778 243.21 245.661 242.015 251.455 242H251.545C257.339 242.015 261.222 243.225 262.029 243.971C262.88 244.733 264 248.691 264 254.5C264 260.309 262.88 264.267 262.029 265.029C261.222 265.79 257.339 267 251.545 267ZM282.455 267H282.545C288.339 267 292.222 265.79 293.029 265.029C293.88 264.267 295 260.309 295 254.5C295 248.691 293.88 244.733 293.029 243.971C292.222 243.225 288.339 242.015 282.545 242H282.455C276.661 242.015 272.778 243.21 271.971 243.971C271.12 244.733 270 248.691 270 254.5C270 260.309 271.12 264.267 271.971 265.029C272.778 265.775 276.661 266.985 282.455 267ZM313.545 267H313.455C307.661 266.985 303.778 265.775 302.971 265.029C302.12 264.267 301 260.309 301 254.5C301 248.691 302.12 244.733 302.971 243.971C303.778 243.21 307.661 242.015 313.455 242H313.545C319.339 242.015 323.222 243.225 324.029 243.971C324.88 244.733 326 248.691 326 254.5C326 260.309 324.88 264.267 324.029 265.029C323.222 265.79 319.339 267 313.545 267ZM344.455 267H344.545C350.339 267 354.222 265.79 355.029 265.029C355.88 264.267 357 260.309 357 254.5C357 248.691 355.88 244.733 355.029 243.971C354.222 243.225 350.339 242.015 344.545 242H344.455C338.661 242.015 334.778 243.21 333.971 243.971C333.12 244.733 332 248.691 332 254.5C332 260.309 333.12 264.267 333.971 265.029C334.778 265.775 338.661 266.985 344.455 267ZM375.545 267H375.455C369.661 266.985 365.778 265.775 364.971 265.029C364.12 264.267 363 260.309 363 254.5C363 248.691 364.12 244.733 364.971 243.971C365.778 243.21 369.661 242.015 375.455 242H375.545C381.339 242.015 385.222 243.225 386.029 243.971C386.88 244.733 388 248.691 388 254.5C388 260.309 386.88 264.267 386.029 265.029C385.222 265.79 381.339 267 375.545 267ZM406.455 267H406.545C412.339 267 416.222 265.79 417.029 265.029C417.88 264.267 419 260.309 419 254.5C419 248.691 417.88 244.733 417.029 243.971C416.222 243.225 412.339 242.015 406.545 242H406.455C400.661 242.015 396.778 243.21 395.971 243.971C395.12 244.733 394 248.691 394 254.5C394 260.309 395.12 264.267 395.971 265.029C396.778 265.775 400.661 266.985 406.455 267ZM437.545 267H437.455C431.661 266.985 427.778 265.775 426.971 265.029C426.12 264.267 425 260.309 425 254.5C425 248.691 426.12 244.733 426.971 243.971C427.778 243.21 431.661 242.015 437.455 242H437.545C443.339 242.015 447.222 243.225 448.029 243.971C448.88 244.733 450 248.691 450 254.5C450 260.309 448.88 264.267 448.029 265.029C447.222 265.79 443.339 267 437.545 267ZM235.667 232H236.333C279.444 232 308.333 222.903 314.333 217.176C320.667 211.448 329 181.687 329 138C329 94.313 320.667 64.552 314.333 58.8244C308.333 53.2091 279.444 44.1123 236.333 44H235.667C192.556 44.1123 163.667 53.0968 157.667 58.8244C151.333 64.552 143 94.313 143 138C143 181.687 151.333 211.448 157.667 217.176C163.667 222.791 192.556 231.888 235.667 232Z"
        className=" fill-[#011F4F]"
      />
    </svg>
  );
}
