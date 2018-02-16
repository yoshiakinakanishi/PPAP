import * as React from 'react';
import Layout from '../layouts';
import Nav from '../components/common/Nav';
import SegmentConfirm from '../components/segmentConfirm';


import { Link } from '../routes';

export default () => (
    <Layout title="セグメント登録確認">
        <Nav/>
        <SegmentConfirm/>
    </Layout>
);
