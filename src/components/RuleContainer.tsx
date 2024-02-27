import React from 'react';
import {PolicyContainerProps} from "./PolicyContainer";

const RuleContainer: React.FC<PolicyContainerProps> = ({ changeContainerType }) => {
    const handlePrevClick = () => {
        changeContainerType('policy');
    };
    return (
        <div>
            <h2>Rule을 추가하는 container</h2>
            <div>
                <h4>소스 선택</h4>
                <select>
                    <option>source1</option>
                    <option>source2</option>
                    <option>source3</option>
                </select>

                <h4>spec(결정사항을 적용할 조건) 선택</h4>
            </div>
            <div>
                <button onClick={handlePrevClick}>이전 화면으로</button>
            </div>
        </div>
    );
}

export default RuleContainer;
