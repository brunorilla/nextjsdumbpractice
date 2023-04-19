import React from 'react';
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {CustomButton} from "@/components/Button/CustomButton";

describe('Dashboard page', ()=> {
    it('Should render properly', ()=>{
        render(<CustomButton onClick={jest.fn()} loading={false}/>)

    })
})