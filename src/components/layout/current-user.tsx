import React from 'react'
import { Popover, Button } from 'antd'
import { CustomAvatar } from "../customavatar"
import { useGetIdentity } from '@refinedev/core'

import type { User } from '@graphql/schema.types'

export const CurrentUser = () => {
  const { data: user } = useGetIdentity<User>()
  return (
    <>
    <Popover
    placement='bottomRight'
    trigger="click"
    overlayInnerStyle={{padding: 0}}
    overlayStyle={{zIndex: 999}}
    >
        <CustomAvatar/>
        
    </Popover>
      
    </>
  )
}

