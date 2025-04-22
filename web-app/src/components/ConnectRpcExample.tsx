import {
  wellknown,
  kas,
  policyAttributes,
  platformConnect,
  platformConnectWeb,
} from '@opentdf/sdk/platform';
import { useState } from 'react';

const transport = platformConnectWeb.createConnectTransport({
  baseUrl: '/api',
});

const wellknownClient = platformConnect.createClient(wellknown.WellKnownService, transport);
const kasClient = platformConnect.createClient(kas.AccessService, transport);
const policyAttributesClient = platformConnect.createClient(
  policyAttributes.AttributesService,
  transport
);

interface ConnectRpcExampleProps {
  accessToken?: string;
}

export function ConnectRpcExample({ accessToken }: ConnectRpcExampleProps) {
  const [result, setResult] = useState('');
  const handleWellknown = async () => {
    const response = await wellknownClient.getWellKnownConfiguration({});
    setResult(JSON.stringify(response.configuration));
  };

  const handleKas = async () => {
    const response = await kasClient.publicKey({});
    setResult(response.publicKey);
  };

  const handlePolicy = async () => {
    const response = await policyAttributesClient.listAttributes(
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    console.log(response);
  };

  return (
    <>
      <fieldset>
        <legend>Connect RPC</legend>
        <button id="wellknown_config" onClick={handleWellknown}>
          Wellknown
        </button>
        <button id="public_kas_key" onClick={handleKas}>
          Public Key Kas
        </button>
        <button id="policy_list_attr" onClick={handlePolicy}>
          Policy List Attributes
        </button>
        <textarea id="connect_result" value={result} readOnly></textarea>
      </fieldset>
    </>
  );
}
