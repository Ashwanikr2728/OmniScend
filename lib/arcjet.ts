import "server-only"
import  arcjet, {
    type ArcjetDecision,
  type BotOptions,
  type EmailOptions,
  type ProtectSignupOptions,
  type SlidingWindowRateLimitOptions,
  detectBot,
  protectSignup,
  shield,
  slidingWindow,
} from '@arcjet/next'
import { env } from './env'


export {
    type ArcjetDecision,
  type BotOptions,
  type EmailOptions,
  type ProtectSignupOptions,
  type SlidingWindowRateLimitOptions,
  detectBot,
  protectSignup,
  shield,
  slidingWindow,
}

export default arcjet({
    key: env.ARCJET_KEY,

    characteristics: ["fingerprint"],

    // define base rules here, can also empty if you dont want to have any base rules
    rules: [
        shield({
            mode: "LIVE",
        })
    ]
})