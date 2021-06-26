import React from "react";

const iconList = {
  close: `M14.6433171,12 L23.6165854,3.02634146 C23.8634146,2.77931707 23.9996098,2.4497561 24,2.09834146 C24,1.74673171 23.8638049,1.41678049 23.6165854,1.17014634 L22.8302439,0.384 C22.5830244,0.136390244 22.2534634,0.000780487805 21.9016585,0.000780487805 C21.550439,0.000780487805 21.220878,0.136390244 20.9736585,0.384 L12.0003902,9.35707317 L3.02673171,0.384 C2.77990244,0.136390244 2.45014634,0.000780487805 2.09853659,0.000780487805 C1.74731707,0.000780487805 1.41756098,0.136390244 1.17073171,0.384 L0.384,1.17014634 C-0.128,1.68214634 -0.128,2.51492683 0.384,3.02634146 L9.35746341,12 L0.384,20.9732683 C0.13697561,21.2206829 0.000975609756,21.5502439 0.000975609756,21.9016585 C0.000975609756,22.2530732 0.13697561,22.5826341 0.384,22.8298537 L1.17053659,23.616 C1.41736585,23.8634146 1.74731707,23.9992195 2.09834146,23.9992195 C2.44995122,23.9992195 2.77970732,23.8634146 3.02653659,23.616 L12.0001951,14.6427317 L20.9734634,23.616 C21.2206829,23.8634146 21.5502439,23.9992195 21.9014634,23.9992195 L21.9018537,23.9992195 C22.2532683,23.9992195 22.5828293,23.8634146 22.8300488,23.616 L23.6163902,22.8298537 C23.8632195,22.5828293 23.9994146,22.2530732 23.9994146,21.9016585 C23.9994146,21.5502439 23.8632195,21.2206829 23.6163902,20.9734634 L14.6433171,12 Z`,
};

const Icon = ({name, color, ...props}) => {
  return (
    <svg
      {...props}
      style={{width: 16}}
      fill={color}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d={iconList[name]}/>
    </svg>
  )
};
export default Icon;