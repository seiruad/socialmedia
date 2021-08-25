import profileModel from '../model/user-profile.model.mjs';


export const changeAboutInfo = async (req, res, next) => {
  const props = req.body
  props.account = req.account

  console.log({props})
  try {
    const newAbout  = await profileModel.changeAbout([props.account.id, props.about])
    res.json(newAbout)
  } catch (err) {
    next(err)
  } 
}
