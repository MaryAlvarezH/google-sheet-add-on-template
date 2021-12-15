import { Select, Space } from 'antd';
import { Icon } from '@iconify/react';
import Text from 'antd/lib/typography/Text';

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function onSearch(val) {
    console.log('search:', val);
}

const SelectField = ({ placeholder, options, label, mode, disabled }) => (
    <Space direction="vertical" size={2} style={{ width: '100%' }}>
        {
            label && <Text>{label}</Text>
        }
        <Select
            disabled={disabled && true}
            showSearch
            mode={mode && mode}
            style={{ width: '100%' }}
            placeholder={placeholder ? placeholder : 'Selecciona una opción'}
            onChange={handleChange}
            optionFilterProp="children"
            onSearch={onSearch}
            filterOption={(input, option) =>
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {
                options.map(i => {
                    return (
                        <Option key={i.value} value={i.value} label={i.label}>
                            <div className="demo-option-label-item">
                                {
                                    i.icon && <Icon icon={`logos:${i.icon}`} style={{ marginRight: '8px' }} />
                                }
                                {i.label}
                            </div>
                        </Option>
                    )
                })
            }
        </Select>
    </Space>
)


export default SelectField;