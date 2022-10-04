interface Props {
  className?: string;
}

const IconTelegram: React.FC<Props> = ({className}) => {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className={`${className}`} cx="60" cy="60" r="52.5" fill="white"/>
      <path d="M86.1996 38.283C86.6672 35.2624 83.7953 32.8783 81.1096 34.0575L27.6181 57.5432C25.6921 58.3888 25.833 61.306 27.8305 61.9421L38.8618 65.455C40.9672 66.1255 43.247 65.7788 45.0855 64.5087L69.9561 47.326C70.7061 46.8079 71.5236 47.8742 70.8828 48.5349L52.9804 66.9924C51.2438 68.7829 51.5885 71.8168 53.6774 73.1268L73.7211 85.6961C75.9692 87.1059 78.8613 85.6896 79.2818 82.9731L86.1996 38.283Z" fill="#333336"/>
    </svg>
  )
}

export default IconTelegram;