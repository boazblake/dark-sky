import { getQlTask } from '../services/requests.js'
import { assoc, filter, propEq, head } from 'ramda'

import { log } from '../services/index.js'

const toViewModel = model => ({ data: { Presentation } }) =>
  (model.CurrentPresentation = Presentation)

export const loadSlides = pId => model =>
  getQlTask(
    `{ Presentation(id:${pId}) { id title Slides {id, title, order, contents}} }`
  ).map(toViewModel(model))
