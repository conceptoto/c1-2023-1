import Router from 'koa-router'
import getHealth from './health/health'
import getUsersByNameAsc from './users/users'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/users/:name', getUsersByNameAsc)

export default router