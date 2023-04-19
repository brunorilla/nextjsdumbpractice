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

describe('LogInWrapper', () => {
    it('renders the login form', () => {
        // Set up the mock implementation of useAuth
        const mockLogin = jest.fn();
        const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;
        mockUseAuth.mockReturnValue({authState: {isAuthenticated: false}, login: mockLogin});

        // Render the LogInWrapper component
        act(()=>{
            render(<LogInWrapper/>);
        })

        // Verify that the login form is displayed
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();

        // Simulate a form submission
        const submitButton = screen.getByText('Ingresar');
        submitButton.click();
        //expect(mockLogin).toHaveBeenCalledTimes(1);
    });
});


