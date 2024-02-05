# Attendance Allowance - Gov Prototype X

### Install
`npm i`

### Run with hot reload
`npm run dev`

### Clone a new version from an existing version
`node create-version -t v2.1.1 -s v2.1.0`
Where -t is the target version and -s is the source

This command will setuo everything required to start a new prototype iteration.

- controllers folder will be cloned
- routes file will be clones
- reference in routes file will use new version number
- views folder will be cloned
- index.njk will contain a start section

### Remove an existing version
`node remove-version -t v2.1.1`
Where -t is the target version to remove

### Certificate Issues
you may need to add 
`export NODE_EXTRA_CA_CERTS="/etc/ssl/certs/zscaler.pem `
to your `.zshrc` or bash equivalent in case of cert issues
TEST