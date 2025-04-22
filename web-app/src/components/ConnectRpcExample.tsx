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
        <button onClick={handleWellknown}>Wellknown</button>
        <button onClick={handleKas}>Public Key Kas</button>
        <button onClick={handlePolicy}>Policy List Attributes</button>
        <textarea value={result} readOnly></textarea>
      </fieldset>
    </>
  );
}
