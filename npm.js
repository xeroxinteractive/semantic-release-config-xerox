module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'refactor',
            release: 'patch'
          }
        ]
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
        notifyOnFail: false,
        onSuccessTemplate: {
          attachments: [
            {
              title:
                ':rocket: A new version of to <$repo_url|$package_name> was just published.',
              text:
                'Version $npm_package_number, triggered by ' +
                process.env.CIRCLE_USERNAME,
              color: 'good',
              attachment_type: 'default'
            }
          ]
        }
      }
    ]
  ]
};
