const createVoice = async (oldState, newState) => {
  const newUserChannel = newState.channel;
  const username = newState.member.user.username;
  const specificChannelId = '1113979624024711168';

  console.log(newState.guild.channels)
  // console.log("username", newState.member.user.username)

  if (newUserChannel && newUserChannel !== oldState.channel && newUserChannel.id === specificChannelId) {
    newUserChannel.guild.channels.create(username, {
      type: 'voice',
      parent: newUserChannel.parent,
    })
    .then(channel => {
      newState.setChannel(channel);
    })
    .catch(console.error);
  }
}

module.exports = {
  createVoice
}