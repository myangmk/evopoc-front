import React from 'react';


export interface PolicyContainerProps {
    changeContainerType: (type: 'policy' | 'rule' | 'other') => void;
}
const PolicyContainer: React.FC<PolicyContainerProps> = ({ changeContainerType }) => {
    const handleClick = () => {
        changeContainerType('rule');
    };

    return (
        <div>
            <h2>새로운 정책을 정의하는 container</h2>
            <div>
                <p>title:</p>
                <input/>
                <h3>결정사항 추가</h3>
                <button name={"ADD"}>ADD</button>
                <li>냉장 멀티 waiting line</li>
                <li>상온 멀티 waiting line</li>
            </div>
            <div>
                <button onClick={handleClick}>NEXT!</button>
            </div>
        </div>
    );
}

export default PolicyContainer;
