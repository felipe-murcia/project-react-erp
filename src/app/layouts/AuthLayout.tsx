// src/app/layouts/AppLayout.jsx
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Flex,
  Stack,
  Image,
} from '@chakra-ui/react';

// ...otros imports

const AuthLayout = () => {

  return(
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack w={'full'} maxW={'md'}>
          <Suspense fallback={<div>Cargando contenido del auth...</div>}>
            <Outlet />
          </Suspense>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )

};

export default AuthLayout;