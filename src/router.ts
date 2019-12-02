import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './components/SignIn.vue'
import SignInPending from './components/SignInPending.vue'
import MainMenu from './components/MainMenu.vue'
import Match from './views/Match.vue'
import Finding from './components/Finding.vue'
import Matched from './components/Matched.vue'
import Battle from './views/Battle.vue'
import EndMatch from './views/EndMatch.vue'
import Error from './views/Error.vue'
import Profile from './views/Profile.vue'
import { Vu } from '@/main'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
        {
            path: '/',
            name: 'landing',
            components: {
                Main: Home
            },
            children: [
                {
                    path: '/',
                    name: 'SignIn',
                    components: {
                        Main: Home,
                        Login: SignIn
                    }
                },
                {
                    path: '/SigningIn',
                    name: 'SignInPending',
                    components: {
                        Main: Home,
                        Login: SignInPending
                    }
                },
                {
                    path: '/home',
                    name: 'home',
                    components: {
                        Main: Home,
                        Login: MainMenu
                    }
                }
            ]
        },
        {
            path: '/loading',
            name: 'loading',
            components: {
                Main: Match
            },
            children: [
                {
                    path: '/loading/find',
                    name: 'loadingFind',
                    components: {
                        Main: Match,
                        Content: Finding
                    }
                },
                {
                    path: '/loading/matched',
                    name: 'loadingMatched',
                    components: {
                        Main: Match,
                        Content: Matched
                    }
                }
            ]
        },
        {
            path: '/battle',
            name: 'battle',
            components: {
                Main: Battle
            },
            children: [
                
            ]
        },
        {
            path: '/end',
            name: 'endMatch',
            components: {
                Main: EndMatch
            }
        },
        {
            path: '/error',
            name: 'error',
            components: {
                Main: Error
            }
        },
        {
            path: '/profile',
            name: 'profile',
            components: {
                Main: Profile
            }
        }
  ]
})

router.beforeEach((to, from, next) => {
    if (to.path === "/" || to.path === "/error" || to.path === "/profile") {
        next();
    } else {
        if (from.name == null) {
            next("/");
        } else {
            next();
        }
    }

    
})

export default router;
