import * as React from 'react';
import Layout from '../layouts';
import Nav from '../components/common/Nav';
import SegmentEdit from '../components/segmentEdit';


import { Link } from '../routes';

export default () => (
    <Layout title="セグメント登録編集">
        <Nav/>
        <SegmentEdit/>
    </Layout>
);
