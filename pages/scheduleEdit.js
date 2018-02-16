import * as React from 'react';
import Layout from '../layouts';
import Nav from '../components/common/Nav';
import ScheduleEdit from '../components/scheduleEdit';


import { Link } from '../routes';

export default () => (
    <Layout title="スケジュール配信編集">
        <Nav/>
        <ScheduleEdit/>
    </Layout>
);
