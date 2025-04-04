// app/api/og/route.tsx
import { ImageResponse } from 'next/og'
import Building from '@/components/sections/calculator/building'
import React from 'react'
import TTSvg from 'text-to-svg'

export async function GET(request: Request) {
  const t = TTSvg.loadSync(null)
  const d = t.getD('1 этаж', {
    x: 555.6791,
    y: 295.8103,
    attributes: {
      transform: 'matrix(0 -0.9397 0.9397 0.342 555.6791 295.8103)',
      fontFamily: "'Prosto'",
      fontSize: '32.6256',
      className: 'stroke-none fill-foreground',
    },
  })
  return new ImageResponse(
    (
      <div tw={'flex  items-center justify-center text-7xl text-red-500 text-center'}>
        <svg
          viewBox="0 0 600 480"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%',
            display: 'block',
          }}
          className={'stroke-foreground'}
        >
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="465.577,297.254 237.232,380.365 237.232,291.633
                      465.577,208.522 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="465.577,208.522 237.232,291.633 161.117,189.724
                      389.462,106.613 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="306.972,340.615 268.914,354.467 268.914,297.001
                      306.972,283.15 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="370.434,331.883 332.376,345.735 332.376,273.903
                      370.434,260.051 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="437.034,293.276 398.977,307.128 398.977,249.663
                      437.034,235.811 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="301.897,336.716 273.988,346.874 273.988,300.901
                      301.897,290.743 "
          ></polygon>
          <line
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="287.943"
            y1="295.822"
            x2="287.943"
            y2="341.795"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="273.988"
            y1="312.394"
            x2="301.897"
            y2="302.236"
          ></line>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            points="431.96,289.377 404.051,299.535 404.051,253.562
                      431.96,243.404 "
          ></polygon>
          <line
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="418.005"
            y1="248.483"
            x2="418.005"
            y2="294.456"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="404.051"
            y1="265.055"
            x2="431.96"
            y2="254.897"
          ></line>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="365.359,333.73 337.45,343.888 337.45,277.803
                      365.359,267.645 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="360.285,306.844 342.525,313.309 342.525,281.703
                      360.285,275.238 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="360.285,329.831 342.525,336.295 342.525,319.055
                      360.285,312.591 "
          ></polygon>
          <line
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="342.525"
            y1="293.196"
            x2="360.285"
            y2="286.731"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="351.405"
            y1="278.47"
            x2="351.405"
            y2="310.077"
          ></line>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="161.207,189.724 85.002,236.225 85.002,324.957
                      237.232,380.365 237.232,291.633 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="180.236,345.253 142.178,331.402 142.178,273.936
                      180.236,287.788 "
          ></polygon>
          <polygon
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            points="175.161,337.66 147.252,327.502 147.252,281.529
                      175.161,291.687 "
          ></polygon>
          <line
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="161.207"
            y1="286.608"
            x2="161.207"
            y2="332.581"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            x1="147.252"
            y1="293.023"
            x2="175.161"
            y2="303.181"
          ></line>
          <path
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M175.161,241.744c0,8.728-6.248,13.529-13.954,10.724
                      c-7.707-2.805-13.954-12.154-13.954-20.882s6.248-13.529,13.954-10.724C168.914,223.667,175.161,233.017,175.161,241.744z"
          ></path>
          <path
            fill="none"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M170.087,239.898c0,5.554-3.976,8.609-8.88,6.824
                      s-8.88-7.735-8.88-13.289s3.976-8.609,8.88-6.824S170.087,234.344,170.087,239.898z"
          ></path>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="161.207"
            y1="226.609"
            x2="161.207"
            y2="246.722"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="170.087"
            y1="239.898"
            x2="152.327"
            y2="233.433"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="85.002"
            y1="324.957"
            x2="6.059"
            y2="353.69"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="237.232"
            y1="380.365"
            x2="158.289"
            y2="409.098"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="190.195"
            y1="406.719"
            x2="12.593"
            y2="342.078"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="237.232"
            y1="380.392"
            x2="316.175"
            y2="409.125"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="465.577"
            y1="297.281"
            x2="544.52"
            y2="326.014"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="537.986"
            y1="314.401"
            x2="284.269"
            y2="406.747"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="465.577"
            y1="297.281"
            x2="544.52"
            y2="326.014"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="389.462"
            y1="106.613"
            x2="544.52"
            y2="163.049"
          ></line>
          <line
            fill="none"
            strokeMiterlimit="10"
            x1="524.839"
            y1="146.3"
            x2="524.839"
            y2="332.636"
          ></line>
          <path
            fill="none"
            strokeMiterlimit="10"
            strokeDasharray="12,6"
            d="M465.577,134.317"
          ></path>
          <path
            fill="none"
            strokeMiterlimit="10"
            strokeDasharray="12,6"
            d="M465.577,134.317"
          ></path>
          <path
            fill="none"
            strokeMiterlimit="10"
            strokeDasharray="12,6"
            d="M237.232,291.633"
          ></path>
          {/*<text*/}
          {/*  transform="matrix(0.883 -0.3214 0 1 404.8549 394.2054)"*/}
          {/*  fontFamily="'Prosto'"*/}
          {/*  fontSize="32.6258"*/}
          {/*  className="stroke-none fill-foreground "*/}
          {/*>*/}
          {/*  8 м*/}
          {/*</text>*/}
          {/*<text*/}
          {/*  transform="matrix(0.883 0.3214 0 1 66.1347 392.183)"*/}
          {/*  fontFamily="'Prosto'"*/}
          {/*  fontSize="32.6258"*/}
          {/*  className="stroke-none fill-foreground"*/}
          {/*>*/}
          {/*  13 м*/}
          {/*</text>*/}
          {/*<text*/}
          {/*  transform={`matrix(0 -0.9397 0.9397 0.342 555.6791 ${295.8103})`}*/}
          {/*  fontFamily="'Prosto'"*/}
          {/*  fontSize="32.6256"*/}
          {/*  className={'stroke-none fill-foreground'}*/}
          {/*>*/}
          {/*  1 этаж*/}
          {/*</text>*/}
          <path d={d} />
        </svg>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    },
  )
}
