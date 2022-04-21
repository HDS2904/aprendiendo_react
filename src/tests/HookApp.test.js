import React from 'react';
import { HookApp } from '../HookApp';
import '@testing-library/jest-dom/extend-expect';
const { render } = require("@testing-library/react")


describe('Pruebas en <HookApp/>', () => { 
	test('Debe mostrarse correctamente', () => { 
		const wrapper = render(<HookApp /> );
		expect(wrapper.container).toMatchSnapshot()
	})
})

// Nota: No se usara enzyme para esta sección ya que actualmente esta en desuso
// pues a pesar de crear adaptadores, el autor recomienda migrar por no poder
// continuar dandole soporte.