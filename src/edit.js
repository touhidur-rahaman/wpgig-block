import { __ } from '@wordpress/i18n';

import { PanelBody, SelectControl } from '@wordpress/components';

import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import './editor.scss';



	export default function Edit( {attributes, setAttributes } ) {			
		// console.log(attributes.userData);

		setAttributes({ userData: wpgigBlockData });

	// console.log(userData);
	

	return (
		<div { ...useBlockProps() }>

		
		{wpgigBlockData && wpgigBlockData.length > 0 ? (
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
                    {wpgigBlockData.map((user) => (
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
