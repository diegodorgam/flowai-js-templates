import Template from './template'
import Action from '../components/action'

/**
 * Template with a video
 * @property {string} title - Describes the video
 * @property {string} url - URL to the video
 * @property {Action} action - Optional Action
 * @example
 * const video = new Video({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class Video extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.url - Required
   * @param {string} opts.action - Optional
   **/
  constructor( { title, url, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Title is mandatory')
    }

    this.title = title

    if(typeof url !== 'string' || !url.length) {
      throw new Error('URL is mandatory')
    }

    this.url = url

    this.action = action || undefined
  }

  set action(action) {
    if(action && !(action instanceof Action)) {
      throw new Error('action must be an instance of Action')
    }

    this._action = action
  }

  get action() {
    return this._action
  }

  toJSON() {
    const {
      title,
      url,
      action,
      quickReplies
    } = this

    return {
      type: 'video',
      payload: {
        title,
        url,
        action,
        quickReplies
      }
    }
  }
}

export default Video
