import Template from './template'
import Action from '../components/action'

/**
 * Template with a location
 * @property {string} title - Describes the image
 * @property {string} lat - Latitude
 * @property {string} long - Longitude
 * @property {Action} action - Optional Action
 * @example
 * const location = new Location({
 *   title: "Infinite Loop 1",
 *   lat: "37.331860",
 *   long: "-122.030248",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
class Location extends Template {

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.lat - Required
   * @param {string} opts.long - Required
   * @param {string} opts.action - Optional
   **/
  constructor( { title, lat, long, action }) {
    super()

    if(typeof title !== 'string' || !title.length) {
      throw new Error('Title is mandatory')
    }

    this.title = title

    if(!lat) {
      throw new Error('Latitude is mandatory')
    }

    this.lat = lat

    if(!long) {
      throw new Error('Longitude is mandatory')
    }

    this.long = long

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
      lat,
      long,
      action,
      quickReplies,
      delay
    } = this

    return {
      type: 'location',
      payload: {
        title,
        lat,
        long,
        action,
        quickReplies
      },
      delay
    }
  }
}

export default Location
