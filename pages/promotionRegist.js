import * as React from 'react';
import Layout from '../layouts';
import PromotionRegist from '../components/promotionRegist';
import { Router } from '../routes';
import { Link } from '../routes';

export default () => (
    <Layout title="プロモーション登録">
        <PromotionRegist/>
    </Layout>
);