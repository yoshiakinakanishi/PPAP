import * as React from 'react';
import Layout from '../layouts';
import Nav from '../components/common/Nav';
import Segment from '../components/segment';


import { Link } from '../routes';

export default () => (
    <Layout title="セグメント登録一覧">
        <Nav/>
        <Segment/>
    </Layout>
);
