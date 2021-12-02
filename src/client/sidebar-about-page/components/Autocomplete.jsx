import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './styles.css';

const renderTitle = (title) => (
    <span>
        {title}
        <a
            style={{ float: 'right' }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
        >
            more
        </a>
    </span>
);

const renderItem = (title, count) => ({
    value: title,
    label: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {title}
            <span>
                <UserOutlined /> {count}
            </span>
        </div>
    ),
});

const options = [
    {
        label: renderTitle('Group 1'),
        options: [renderItem('Element 1', 10000), renderItem('Element 2', 10600)],
    },
    {
        label: renderTitle('Group 2'),
        options: [renderItem('Element 3', 60100), renderItem('Element 4', 30010)],
    },
    {
        label: renderTitle('Group 3'),
        options: [renderItem('Element 5', 100000)],
    },
];

const AutoCompleteField = () => (
    <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={250}
        style={{ width: 250, fontSize: '8px' }}
        options={options}
    >
        <Input.Search size="medium" placeholder="Select an element" />
    </AutoComplete>
);

export default AutoCompleteField;

// .certain-category-search-dropdown .ant-select-dropdown-menu-item-group-title {
//   color: #666;
//   font-weight: bold;
// }

// .certain-category-search-dropdown .ant-select-dropdown-menu-item-group {
//   border-bottom: 1px solid #f6f6f6;
// }

// .certain-category-search-dropdown .ant-select-dropdown-menu-item {
//   padding-left: 16px;
// }

// .certain-category-search-dropdown .ant-select-dropdown-menu-item.show-all {
//   text-align: center;
//   cursor: default;
// }

// .certain-category-search-dropdown .ant-select-dropdown-menu {
//   max-height: 300px;
// }