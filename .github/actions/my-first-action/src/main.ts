import * as core from '@actions/core';

async function run() {
    const anInput = core.getInput('anInput', { required: true });
    core.setOutput('anOutput', `${(new Date()).toISOString()} ${anInput}`);
}

run();