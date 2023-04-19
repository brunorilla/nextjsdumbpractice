import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {LogInWrapper} from "@/components/login/LogInWrapper";
import {useAuth} from '@/lib/auth';
import {act} from "react-dom/test-utils";

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

jest.mock('../../lib/auth', () => ({
    getAuth: jest.fn(),
    useAuth: jest.fn()
}));

const mockLogin = jest.fn()

const mockUseAuth = jest.fn().mockReturnValue({
    authState: {isAuthenticated: false},
    login: mockLogin
});

describe('LogInWrapper', () => {
    it('renders the login form', () => {
        // Set up the mock implementation of useAuth
        const mockLogin = jest.fn();


        render(<LogInWrapper/>);

        // Render the LogInWrapper component
        act(()=>{
            const submitButton = screen.getByText('Ingresar');
            submitButton.click();
        })

        // Verify that the login form is displayed
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();

        // Simulate a form submission

        expect(mockLogin).toHaveBeenCalledTimes(1);
    });
});


