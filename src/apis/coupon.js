/*
 * author: lufei
 * date:2019/9/24
 */

import req from './http.js'

//优惠券详情
export const TICKET_GET = query => req('post', '/ticket/get', query);

//用户优惠券列表获取
export const USER_TICKET_GETS = query => req('post', 'user/ticket/gets', query);

//领取优惠券
export const TICKET_LINK = query => req('post', '/ticket/link', query);

//优惠券结果页
export const TICKET_DETAIL_GETS = query => req('post', '/goods/activity/detail/gets', query);

//商品详情页优惠券信息
export const GOODS_TICKET_GETS = query => req('post', '/goods/ticket/gets', query);

//优惠券详情推荐商品
export const TICKET_GOODS_RECOMMEND = query => req('post', '/ticket/goods/recommend', query);
