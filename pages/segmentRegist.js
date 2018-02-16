import * as React from 'react';
import Layout from '../layouts';
import Nav from '../components/common/Nav';
import SegmentRegist from '../components/segmentRegist';


import { Link } from '../routes';

export default () => (
    <Layout title="セグメント新規登録">
        <Nav/>
        <SegmentRegist/>
    </Layout>
);
