import React, {useState} from 'react';
import './App.css';
import PolicyContainer from "./components/PolicyContainer";
import RuleContainer from "./components/RuleContainer";

type ContainerType = 'policy' | 'rule' | 'other';

function App() {
    const [containerType, setContainerType] = useState<ContainerType>('policy');
    const changeContainerType = (type: ContainerType) => {
        setContainerType(type);
    };

    return (
        <div className="App">
            <header className="App-header">
                {containerType === 'policy' ? <PolicyContainer changeContainerType={changeContainerType} /> : null}
                {containerType === 'rule' ? <RuleContainer  changeContainerType={changeContainerType} /> : null}
            </header>
        </div>
    );
}

export default App;
