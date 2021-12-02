import React from 'react';
import { DatePicker, Space, Radio, Button, Tooltip, Row, Col, Typography } from 'antd';
import 'antd/dist/antd.css';
import Layout, { Content } from 'antd/lib/layout/layout';
import AutoCompleteField from './Autocomplete';
import CascaderField from './Cascader';
import CheckboxesGroup from './CheckboxesGroup';
import Multiselect from './Multiselect';
import IntegerStep from './IntegerStep';
import TreeSelector from './Tree';
import { Tag } from 'antd';
import { GithubFilled } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Text, Link } = Typography;

const About = () => (
  <Layout style={{ padding: '16px 8px', height: '100vh' }}>

    <p style={{ fontSize: '14px' }}>
      <Text>This is an example of a page using
        <Link href="https://reactjs.org" target="_blank"> React </Link>as Framework and
        <Link href="https://ant.design" target="_blank"> Ant Design </Link>as UI Components library ☀️
      </Text>
    </p>

    <Content style={{ padding: '8px', background: 'white' }}>
      <Space direction="vertical" size={18}>

        <Radio.Group value="and">
          <Radio.Button value="not">Not</Radio.Button>
          <Radio.Button value="and">And</Radio.Button>
          <Radio.Button value="or">Or</Radio.Button>
        </Radio.Group>

        <AutoCompleteField />

        <CascaderField />

        <Multiselect />

        <RangePicker />

        <IntegerStep />

        <CheckboxesGroup />

        <TreeSelector />

        <Row style={{ position: 'relative' }}>
          <Col span={12}>
            <Tooltip title="prompt text" color='cyan'>
              <Button>Hover me</Button>
            </Tooltip>
          </Col>
          <Col span={12} style={{ position: 'absolute', right: '0' }}>
            <Button type="primary" loading>
              <Text style={{ marginLeft: '24px', color: 'white' }}>Get Data</Text>
            </Button>
          </Col>

        </Row>
      </Space>
    </Content>

    <Content style={{ paddingTop: '10px' }}>
      <a
        href="https://github.com/MaryAlvarezH/google-sheet-add-on-template"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tag icon={<GithubFilled />} color="#24292E">
          Go to repository
        </Tag>
      </a>
    </Content>
  </Layout>
);

export default About;
