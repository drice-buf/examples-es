import {
    createPromiseClient
} from '@bufbuild/connect'
import {
    createConnectTransport,
} from '@bufbuild/connect-web'
import { ElizaService } from '../src/gen/connectrpc/eliza/v1/eliza_connect.js'
import { IntroduceRequest } from '../src/gen/connectrpc/eliza/v1/eliza_pb.js'

it('imports ElizaService correctly', () => {
    expect(ElizaService).toBeDefined()
})
it('imports messages correctly', () => {
    expect(IntroduceRequest).toBeDefined()
})

it('creates a promise client', () => {
    const client = createPromiseClient(
        ElizaService,
        createConnectTransport({
            baseUrl: 'https://demo.connectrpc.com',
        })
    )
    expect(client.say).toBeDefined()
    expect(client.introduce).toBeDefined()
})


