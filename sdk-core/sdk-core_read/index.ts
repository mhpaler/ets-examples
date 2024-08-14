import { createTokenClient } from "@ethereum-tag-service/sdk-core";
const chainId = 421614;
const client = createTokenClient({ chainId });
const tag = "#rainbow";
const tagId = await client?.computeTagId(tag);
const tagExists = tagId && (await client?.tagExistsById(tagId));
export { tag, tagId, tagExists };
