/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

import DataTable from 'react-data-table-component';
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {
	
	const { userData } = attributes;

	return (
        <div {...useBlockProps.save()}>
            {userData && userData.length > 0 ? (
                <table id='best--table'>
                    <thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Username</th>
							<th>Email</th>
							<th>Street</th>
							<th>Suite</th>
							<th>City</th>
							<th>Zip Code</th>
							<th>Latitude</th>
							<th>Longitude</th>
							<th>Phone</th>
							<th>Website</th>
							<th>Company Name</th>
							<th>Catch Phrase</th>
							<th>Business</th>
						</tr>
                    </thead>
                    <tbody>
                        {userData.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.address?.street || '-'}</td>
							<td>{user.address?.suite || '-'}</td>
							<td>{user.address?.city || '-'}</td>
							<td>{user.address?.zipcode || '-'}</td>
							<td>{user.address?.geo?.lat || '-'}</td>
							<td>{user.address?.geo?.lng || '-'}</td>
							<td>{user.phone}</td>
							<td>{user.website}</td>
							<td>{user.company?.name || '-'}</td>
							<td>{user.company?.catchPhrase || '-'}</td>
							<td>{user.company?.bs || '-'}</td>
						</tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );

}
