import * as React from 'react';
import Layout from '../layouts';
import Nav from '../components/common/Nav';
import Schedule from '../components/schedule';


import { Link } from '../routes';

export default () => (
    <Layout title="スケジュール配信一覧">
        <Nav/>
        <Schedule/>
    </Layout>
);
