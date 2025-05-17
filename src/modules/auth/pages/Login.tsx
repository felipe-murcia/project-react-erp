// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import { FormLogin } from '../components/FormLogin/FormLogin';
import { Heading, Stack, Text, Highlight } from '@chakra-ui/react';

const LoginPage = () => {
  return (
    <Stack>
      <Heading size="3xl" letterSpacing="tight">
        <Highlight query="System ERP" styles={{ color: 'teal.600' }}>
          Gestiona Fácil con System ERP
        </Highlight>
      </Heading>
      <Text fontSize="md" color="fg.muted">
        El mejor sistema de Control de Inventario y Facturación para su empresa.
      </Text>
      <FormLogin />
      <p>
        ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
      </p>
      <Link to="/">Volver al Inicio</Link>
    </Stack>
  );
};

export default LoginPage;
