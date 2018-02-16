import * as React from 'react';
import Layout from '../layouts';
import Nav from '../components/common/Nav';
import ScheduleConfirm from '../components/scheduleConfirm';


import { Link } from '../routes';

export default () => (
    <Layout title="スケジュール登録確認">
        <Nav/>
        <ScheduleConfirm/>
    </Layout>
);
