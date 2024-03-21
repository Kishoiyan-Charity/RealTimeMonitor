import { Avatar as AntdAvatar, AvatarProps }from 'antd'
import React from 'react'

type Props = AvatarProps & {
  name: string;
}


export const CustomAvatar = ({ name, style, ...rest}: Props) => {
    return (
      <AntdAvatar
      alt={'Kishoyan'}
      size='small'
      style={{ 
        backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
       }}
      >
          {name}
      </AntdAvatar>
    )
  }