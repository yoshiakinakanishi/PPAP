import * as React from 'react';
import Layout from '../layouts';
import Nav from '../components/common/Nav';
import ScheduleRegist from '../components/scheduleRegist';


import { Link } from '../routes';

export default () => (
    <Layout title="スケジュール新規配信登録">
        <Nav/>
        <ScheduleRegist/>
    </Layout>
);
