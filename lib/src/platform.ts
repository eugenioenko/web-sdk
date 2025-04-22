// export client service definitions
export * as authorization from './platform/authorization/authorization_pb.js';
export * as common from './platform/common/common_pb.js';
export * as entityResolution from './platform/entityresolution/entity_resolution_pb.js';
export * as kas from './platform/kas/kas_pb.js';
export * as policyActions from './platform/policy/actions/actions_pb.js';
export * as policyAttributes from './platform/policy/attributes/attributes_pb.js';
export * as policyKasRegistry from './platform/policy/kasregistry/key_access_server_registry_pb.js';
export * as policyNamespaces from './platform/policy/namespaces/namespaces_pb.js';
export * as policyObjects from './platform/policy/objects_pb.js';
export * as policyRegisteredResources from './platform/policy/registeredresources/registered_resources_pb.js';
export * as policyResourceMapping from './platform/policy/resourcemapping/resource_mapping_pb.js';
export * as policySelectors from './platform/policy/selectors_pb.js';
export * as policySubjectMapping from './platform/policy/subjectmapping/subject_mapping_pb.js';
export * as policyUnsafe from './platform/policy/unsafe/unsafe_pb.js';
export * as wellknown from './platform/wellknownconfiguration/wellknown_configuration_pb.js';

// export Connect RPC framework
export * as platformConnectWeb from '@connectrpc/connect-web';
export * as platformConnect from '@connectrpc/connect';
