import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const DropDown = (props) => {
    const { mainArray, secondArray, onSelectClick } = props;
    const variants = ['Primary', 'Secondary'];

    return (
        <div>
            {mainArray &&
                <DropdownButton
                    as={ButtonGroup}
                    key={variants[0]}
                    id={`dropdown-variants-${variants[0]}`}
                    variant={variants[0].toLowerCase()}
                    title={mainArray.title}
                    onClick={onSelectClick}
                >
                    {mainArray.list.map((c, i) => (
                        <Dropdown.Item
                            name={mainArray.name}
                            refer={c}
                            key={i}>
                            {c}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            }
            {secondArray &&
                <DropdownButton
                    as={ButtonGroup}
                    key={variants[1]}
                    id={`dropdown-variants-${variants[1]}`}
                    variant={variants[1].toLowerCase()}
                    title={secondArray.title}
                    onClick={onSelectClick}
                >
                    {secondArray.list.map((c, i) => (
                        <Dropdown.Item
                            name={mainArray.name}
                            refer={c}
                            key={i}>
                            {c}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            }
        </div>
    );
};

export default DropDown;