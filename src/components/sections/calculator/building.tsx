'use client'
import React from 'react'
import useCalcStore from '@/stores/calc'

// Utilizing enums for better type safety and readability

// Component that represents a single story of a building
const OneStoryBuilding = () => {
  const initialInput = useCalcStore((s) => s.initialInput)
  return (
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
        stroke-width="2"
        points="465.577,297.254 237.232,380.365 237.232,291.633 
                      465.577,208.522 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="465.577,208.522 237.232,291.633 161.117,189.724 
                      389.462,106.613 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="306.972,340.615 268.914,354.467 268.914,297.001 
                      306.972,283.15 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="370.434,331.883 332.376,345.735 332.376,273.903 
                      370.434,260.051 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="437.034,293.276 398.977,307.128 398.977,249.663 
                      437.034,235.811 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="301.897,336.716 273.988,346.874 273.988,300.901 
                      301.897,290.743 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="287.943"
        y1="295.822"
        x2="287.943"
        y2="341.795"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
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
        stroke-width="2"
        x1="418.005"
        y1="248.483"
        x2="418.005"
        y2="294.456"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="404.051"
        y1="265.055"
        x2="431.96"
        y2="254.897"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="365.359,333.73 337.45,343.888 337.45,277.803 
                      365.359,267.645 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="360.285,306.844 342.525,313.309 342.525,281.703 
                      360.285,275.238 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="360.285,329.831 342.525,336.295 342.525,319.055 
                      360.285,312.591 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="342.525"
        y1="293.196"
        x2="360.285"
        y2="286.731"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="351.405"
        y1="278.47"
        x2="351.405"
        y2="310.077"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="161.207,189.724 85.002,236.225 85.002,324.957 
                      237.232,380.365 237.232,291.633 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="180.236,345.253 142.178,331.402 142.178,273.936 
                      180.236,287.788 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="175.161,337.66 147.252,327.502 147.252,281.529 
                      175.161,291.687 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="161.207"
        y1="286.608"
        x2="161.207"
        y2="332.581"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="147.252"
        y1="293.023"
        x2="175.161"
        y2="303.181"
      ></line>
      <path
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        d="M175.161,241.744c0,8.728-6.248,13.529-13.954,10.724
                      c-7.707-2.805-13.954-12.154-13.954-20.882s6.248-13.529,13.954-10.724C168.914,223.667,175.161,233.017,175.161,241.744z"
      ></path>
      <path
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
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
      <path fill="none" strokeMiterlimit="10" stroke-dasharray="12,6" d="M465.577,134.317"></path>
      <path fill="none" strokeMiterlimit="10" stroke-dasharray="12,6" d="M465.577,134.317"></path>
      <path fill="none" strokeMiterlimit="10" stroke-dasharray="12,6" d="M237.232,291.633"></path>
      <text
        transform="matrix(0.883 -0.3214 0 1 404.8549 394.2054)"
        font-family="'Prosto'"
        font-size="32.6258"
        className="stroke-none fill-foreground "
      >
        {initialInput.length} m
      </text>
      <text
        transform="matrix(0.883 0.3214 0 1 66.1347 392.183)"
        font-family="'Prosto'"
        font-size="32.6258"
        className="stroke-none fill-foreground"
      >
        {initialInput.width} m
      </text>
      <text
        transform="matrix(0 -0.9397 0.9397 0.342 555.6791 295.8103)"
        font-family="'Prosto'"
        font-size="32.6256"
        className={'stroke-none fill-foreground'}
      >
        {initialInput.stories} этаж
      </text>
    </svg>
  )
}

// Component that represents a two-story building
const TwoStoryBuilding = () => {
  const initialInput = useCalcStore((s) => s.initialInput)
  return (
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
        stroke-width="2"
        points="465.577,297.254 237.232,380.365 237.232,207.968
                    465.577,124.857 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="465.577,124.857 237.232,207.968 161.117,106.059
                    389.462,22.948 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="306.972,340.615 268.914,354.467 268.914,297.001
                    306.972,283.15 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="301.897,250.517 273.988,260.675 273.988,214.703
                    301.897,204.545 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="370.433,331.883 332.376,345.735 332.376,273.903
                    370.433,260.051 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="370.433,231.319 332.376,245.17 332.376,187.705
                    370.433,173.853 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="306.972,254.417 268.914,268.269 268.914,210.803
                    306.972,196.951 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="437.034,293.276 398.977,307.128 398.977,249.663
                    437.034,235.811 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="287.943"
        y1="209.624"
        x2="287.943"
        y2="255.596"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="273.988"
        y1="226.196"
        x2="301.897"
        y2="216.038"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="365.359,227.419 337.45,237.577 337.45,191.604
                    365.359,181.446 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="351.405"
        y1="186.525"
        x2="351.405"
        y2="232.498"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="337.45"
        y1="203.098"
        x2="365.359"
        y2="192.94"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="431.96,203.178 404.051,213.336 404.051,167.364
                    431.96,157.206 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="418.005"
        y1="162.285"
        x2="418.005"
        y2="208.257"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="404.051"
        y1="178.857"
        x2="431.96"
        y2="168.699"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="301.897,336.716 273.988,346.874 273.988,300.901
                    301.897,290.743 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="287.943"
        y1="295.822"
        x2="287.943"
        y2="341.795"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="273.988"
        y1="312.394"
        x2="301.897"
        y2="302.236"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="431.96,289.377 404.051,299.535 404.051,253.562
                    431.96,243.404 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="418.005"
        y1="248.483"
        x2="418.005"
        y2="294.456"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="404.051"
        y1="265.055"
        x2="431.96"
        y2="254.897"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="437.034,207.078 398.977,220.93 398.977,163.464
                    437.034,149.612 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="365.359,333.73 337.45,343.888 337.45,277.803
                    365.359,267.645 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="360.285,306.844 342.525,313.309 342.525,281.703
                    360.285,275.238 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="360.285,329.831 342.525,336.295 342.525,319.055
                    360.285,312.591 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="342.525"
        y1="293.196"
        x2="360.285"
        y2="286.731"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="351.405"
        y1="278.47"
        x2="351.405"
        y2="310.077"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="161.207,106.059 85.002,152.561 85.002,324.958
                    237.232,380.365 237.232,207.968 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="180.236,345.253 142.178,331.402 142.178,273.936
                    180.236,287.788 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="175.161,251.461 147.252,241.303 147.252,195.331
                    175.161,205.489 "
      ></polygon>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="180.236,259.055 142.178,245.203 142.178,187.738
                    180.236,201.589 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="161.207"
        y1="200.41"
        x2="161.207"
        y2="246.382"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="147.252"
        y1="206.824"
        x2="175.161"
        y2="216.982"
      ></line>
      <polygon
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        points="175.161,337.66 147.252,327.502 147.252,281.529
                    175.161,291.687 "
      ></polygon>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="161.207"
        y1="286.608"
        x2="161.207"
        y2="332.581"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="147.252"
        y1="293.023"
        x2="175.161"
        y2="303.181"
      ></line>
      <path
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        d="M175.161,158.08c0,8.728-6.248,13.529-13.954,10.724
                    c-7.707-2.805-13.954-12.154-13.954-20.882s6.248-13.529,13.954-10.724C168.914,140.003,175.161,149.352,175.161,158.08z"
      ></path>
      <path
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        d="M170.087,156.233c0,5.554-3.976,8.609-8.88,6.824
                    s-8.88-7.735-8.88-13.289s3.976-8.609,8.88-6.824S170.087,150.679,170.087,156.233z"
      ></path>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="161.207"
        y1="142.944"
        x2="161.207"
        y2="163.057"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        stroke-width="2"
        x1="170.087"
        y1="156.233"
        x2="152.327"
        y2="149.769"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="85.002"
        y1="324.958"
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
        y1="22.948"
        x2="544.52"
        y2="79.385"
      ></line>
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="524.839"
        y1="62.636"
        x2="524.839"
        y2="332.636"
      ></line>
      <text
        transform="matrix(0.883 -0.3214 0 1 404.8568 394.205)"
        font-family="'Prosto'"
        font-size="32.6258"
        className="stroke-none fill-foreground"
      >
        {initialInput.length} m
      </text>
      <text
        transform="matrix(0.883 0.3214 0 1 66.1372 392.1836)"
        font-family="'Prosto'"
        font-size="32.6258"
        className="stroke-none fill-foreground"
      >
        {initialInput.width} m
      </text>
      <text
        transform="matrix(0 -0.9397 0.9397 0.342 555.6812 259.0441)"
        font-family="'Prosto'"
        font-size="32.6256"
        className="stroke-none fill-foreground"
      >
        {initialInput.stories} этажа
      </text>
    </svg>
  )
}

const Building = () => {
  const stories = useCalcStore((s) => s.initialInput.stories)
  return (
    <div className={'w-full block justify-self-center'}>
      {stories === '1' && <OneStoryBuilding />}
      {stories === '2' && <TwoStoryBuilding />}
    </div>
  )
}

export default Building
