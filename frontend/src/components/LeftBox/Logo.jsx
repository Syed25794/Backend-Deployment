import React from 'react';
import { Flex} from '@chakra-ui/react';
import styles from './Logo.module.css';

const Logo = ({sellerName}) => {
  return (
    <div>
      <Flex>
        <div className={styles.logo}>{sellerName[0]}</div>
        <div className={styles.name}>{sellerName} Store</div>
      </Flex>
    </div>
  )
}

export default Logo