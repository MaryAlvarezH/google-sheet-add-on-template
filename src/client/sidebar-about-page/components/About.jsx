import React from 'react';
import { DatePicker, Space, Radio, Button, Tooltip, Row, Col, Typography, Skeleton, Divider } from 'antd';
import 'antd/dist/antd.css';
import Layout, { Content } from 'antd/lib/layout/layout';
import AutoCompleteField from './Autocomplete';
import CascaderField from './Cascader';
import CheckboxesGroup from './CheckboxesGroup';
import IntegerStep from './IntegerStep';
import TreeSelector from './Tree';
import { Tag } from 'antd';
import { GithubFilled } from '@ant-design/icons';
import SelectField from './SelectField';
import 'moment/locale/es-mx';
import locale from 'antd/es/date-picker/locale/es_ES';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Text, Link } = Typography;

const clients = [
  { label: 'Coppel', value: 'coppel' },
  { label: 'HP', value: 'hp' },
  { label: 'Chedrahui', value: 'chedrahui' },
  { label: 'AMVO', value: 'amvo' },
  { label: `Domio's`, value: 'dominos' }
]
const providers = [
  { label: 'Google Ads', value: 'ads', icon: 'google-ads' },
  { label: 'Analytics', value: 'analytics', icon: 'google-analytics' },
  { label: 'Facebook', value: 'facebook', icon: 'facebook' }
]

const accounts = {
  ads: [
    { label: 'Cuenta 1', value: 'ads_account_1', icon: 'google-ads' },
    { label: 'Cuenta 2', value: 'ads_account_2', icon: 'google-ads' },
    { label: 'Cuenta 3', value: 'ads_account_3', icon: 'google-ads' },
    { label: 'Cuenta 4', value: 'ads_account_4', icon: 'google-ads' },
    { label: 'Cuenta 5', value: 'ads_account_5', icon: 'google-ads' },
  ],
  facebook: [
    { label: 'Cuenta 1', value: 'fb_account_1', icon: 'facebook' },
    { label: 'Cuenta 2', value: 'fb_account_2', icon: 'facebook' },
    { label: 'Cuenta 3', value: 'fb_account_3', icon: 'facebook' },
    { label: 'Cuenta 4', value: 'fb_account_4', icon: 'facebook' },
    { label: 'Cuenta 5', value: 'fb_account_5', icon: 'facebook' },
  ],
  analytics: [
    { label: 'Cuenta 1', value: 'analytics_account_1', icon: 'google-analytics' },
    { label: 'Cuenta 2', value: 'analytics_account_2', icon: 'google-analytics' },
    { label: 'Cuenta 3', value: 'analytics_account_3', icon: 'google-analytics' },
    { label: 'Cuenta 4', value: 'analytics_account_4', icon: 'google-analytics' },
    { label: 'Cuenta 5', value: 'analytics_account_5', icon: 'google-analytics' },
  ]
}

const dimensions = [
  { label: 'Edad', value: 'ads_age', icon: 'google-ads' },
  { label: 'Edad', value: 'analytics_age', icon: 'google-analytics' },
  { label: 'Edad', value: 'fb_age', icon: 'facebook' },
  { label: 'Género', value: 'ads_gender', icon: 'google-ads' },
  { label: 'Género', value: 'analytics_gender', icon: 'google-analytics' },
  { label: 'Género', value: 'fb_gender', icon: 'google-ads' },
  { label: 'Dispositivo', value: 'ads_device', icon: 'google-ads' },
  { label: 'Dispositivo', value: 'analytics_device', icon: 'google-analytics' },
  { label: 'Dispositivo', value: 'fb_device', icon: 'facebook' },
  { label: 'País', value: 'ads_country', icon: 'google-ads' },
  { label: 'País', value: 'analytics_country', icon: 'google-analytics' },
  { label: 'País', value: 'fb_country', icon: 'facebook' },
]

const metrics = [
  { label: 'Clics', value: 'ads_clicks', icon: 'google-ads' },
  { label: 'Clics', value: 'analytics_clicks', icon: 'google-analytics' },
  { label: 'Clics', value: 'fb_clicks', icon: 'facebook' },
  { label: 'Usuarios', value: 'ads_users', icon: 'google-ads' },
  { label: 'Usuarios', value: 'analytics_users', icon: 'google-analytics' },
  { label: 'Usuarios', value: 'fb_users', icon: 'facebook' },
  { label: 'Tasa de rebote', value: 'ads_bounce_rate', icon: 'google-ads' },
  { label: 'Tasa de rebote', value: 'analytics_bounce_rate', icon: 'google-analytics' },
  { label: 'Tasa de rebote', value: 'fb_bounce_rate', icon: 'facebook' },
  { label: 'Tasa de conversión', value: 'ads_conversion_rate', icon: 'google-ads' },
  { label: 'Tasa de conversión', value: 'analytics_conversion_rate', icon: 'google-analytics' },
  { label: 'Tasa de conversión', value: 'fb_conversion_rate', icon: 'facebook' }
]


const About = () => (
  <Layout style={{ padding: '16px 8px', minHeight: '100vh' }}>

    <Content style={{ padding: '8px', background: 'white', position: 'relative' }}>
      <Space direction="vertical" size={18}>

        <SelectField label='Cliente' placeholder="Selecciona un cliente" options={clients} />

        <SelectField label='Proveedor' placeholder="Selecciona uno o más proveedores" options={providers} mode="multiple" />

        <SelectField label='Cuentas de Google Ads' placeholder="Selecciona una cuenta" options={accounts.ads} />
        <SelectField label='Cuentas de Analytics' placeholder="Selecciona una cuenta" options={accounts.analytics} />
        <SelectField label='Cuentas de Facebook' placeholder="Selecciona una cuenta" options={accounts.facebook} />

        <SelectField label='Dimensiones' placeholder="Selecciona una o más dimensiones" options={dimensions} mode="multiple" />

        <SelectField label='Métricas' placeholder="Selecciona una o más métricas" options={metrics} mode="multiple" />

        <Space direction="vertical" size={2} style={{ width: '100%' }}>
          <Text>Rango de fechas</Text>
          <RangePicker locale={locale} />
        </Space>

        <>
          <Text>Filtros</Text>
          <Space>
            <Skeleton.Button size="small" />
            <Skeleton.Button size="small" />
            <Skeleton.Button size="small" />
          </Space>
          <Divider style={{ marginTop: '0px', marginBottom: '0px' }} />
          <Space>
            <Skeleton.Input style={{ width: 70 }} size="small" />
            <Skeleton.Input style={{ width: 70 }} size="small" />
            <Skeleton.Input style={{ width: 70 }} size="small" />
            <Skeleton.Avatar size="small" shape="circle" />
          </Space>

        </>

        <div style={{ position: 'absolute', bottom: '8px', width: '95%' }}>
          <Row style={{ position: 'relative' }}>
            <Col span={12}>
              <Button icon={<ClearOutlined />}>
                Limpiar filtros
              </Button>
            </Col>
            <Col span={12} style={{ position: 'absolute', right: '0' }}>
              <Button type="primary" icon={<SearchOutlined />}>
                Consultar
              </Button>
            </Col>
          </Row>
        </div>

      </Space>
    </Content>
  </Layout>
);

export default About;
