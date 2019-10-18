# Slack lib for Enonic XP

This is a very basci library, which allows you sending messages to your slack channels.

## Usage

You will need to have an active Slack application. You can create it [here](https://api.slack.com/apps). You will also need to create a webhooks to a channels you would like to send messages to.

Add Enonic repository to the repository list in the build.gradle file:

    repositories {
      maven {
        url 'http://repo.enonic.com/public'
      }
    }

After this, add the following dependency:

    dependencies {
      include 'com.enonic.lib:lib-text-encoding:2.0.0'
    }

## Examples

You can then use this inside your javascript controller or other parts of your app. This library includes only one function, which does the sending of messages.

    // Include the library
    var slackLib = require('/lib/slackLib');

    // Send message to the channel
    slackLib.sendMessage({
      // Channel. Required. Url to webhook, which can be obtained inside you Slack app.
      channel: webhookUrl,
      // Title. Not required. If present, this text will be displayed bold and a newline will be added after it.
      title: title,
      // Body. Not required. This will be displayed as a plain text after title(if present).
      body: body
    });
