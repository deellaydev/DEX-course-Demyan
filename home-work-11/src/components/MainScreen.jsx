import React from 'react';
import {Card} from "./Card";

export const MainScreen = () => {
    return (
        <div className="mainscreen">
            <div className="container">
                <div className="mainscreen__inner">
                    <Card
                        state={'ended'}
                    />
                    <Card
                        state={'active'}
                    />
                    <Card
                        state={'waiting'}
                    />
                </div>
            </div>
        </div>
    );
};
