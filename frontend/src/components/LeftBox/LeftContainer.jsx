import React from 'react'
import Account from './Account'
import Container from './Container'
import Notifications from './Notifications'
import SearchModal from './SearchModal'

const LeftContainer = () => {
  return (
    <div>
      <SearchModal />
      <Notifications />
      <Account />
      <Container />
    </div>
  )
}

export default LeftContainer